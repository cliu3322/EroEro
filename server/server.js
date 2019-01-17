import express from 'express';
import bodyParser from 'body-parser';
import jsonwebtoken from 'jsonwebtoken';
import cors from 'cors';
import Config from './config';
import { authenticate, authError } from './middleware';
import router from './router';
import socketRouter from './socketRouter';
import logger from 'morgan';
import mongoose from 'mongoose';
import session from 'express-session';
import User from './db/models/user';
import Boom from 'boom';
import bcrypt from 'bcrypt';
import sanitizeUser from './helpers/sanitizeUser';

import * as handlers from './handlers';

const path = require('path');
const { port, secretKey, expiredAfter } = Config;
const app = express();

function doesUserExists(username, password) {
	const user = {
		id: 1,
		username: 'demo@gmail.com',
		password: 'demodemo',
	};
	if (username === user.username && password === user.password) {
		return true;
	}
	return false;
}

app
	.use(bodyParser.urlencoded({ extended: true }))
	.use(bodyParser.json())
	.use(cors());
app.use(logger('dev')); // Log requests to API using morgan

	// Enable CORS from client-side
app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');//well 这不应该是*的  我比较懒  以后在换吧
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

mongoose.Promise = global.Promise;
const MongoStore = require("connect-mongo")(session);

// Database Setup
mongoose.connect(Config.database,{ useNewUrlParser: true } ,(mongooseErr) => {
  if(mongooseErr) {
    console.error(mongooseErr);
  }
  else {
    // session store Setup
    const sessionParameters = session({
      secret: secretKey,
      saveUninitialized: false,
      resave: false,
      store: new MongoStore({
        mongooseConnection: mongoose.connection
      }),
      cookie: {
        path: "/",
        secure: true
      }
    });
    app.use(sessionParameters);



    router(app);
		socketRouter(app);
  }
});

// app.get('/', (req, res) => {
//
// 	res.json({ status: 'OK' });
// });

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.post('/api/login', (req, res) => {
	console.log(req.headers['x-forwarded-for'] || req.connection.remoteAddress);
	const { username, password, email } = req.body;
	const response = {};
	// You can use DB checking here

	User.findOne({$or: [{email: email}, {username: username}]}).then(
		(user) => {
			if (!user) {
				res.json({
					message: 'Wrong username or password',
				});
			}
			else {
				const passwordMatch = bcrypt.compareSync(password, user.password);
				const response = {};
				if (!passwordMatch) {
					response.message = 'Wrong email or password';
				}
				else {
					response.token = jsonwebtoken.sign(
						{
							expiredAt: new Date().getTime() + expiredAfter,
							username: user.username
						}, secretKey)
				}
				res.json(response);
			}
		});
});

app.post('/api/signUp', handlers.createUser);
app.use('/api/secret', [authenticate, authError]);
app.post('/api/secret/test', (req, res) => {
	res.json({
		status: 200,
		message: 'succcesful',
	});
});



const server = app.listen(port, () => {
	console.log('Isomorphic JWT login ' + port);
});


const sockets = {};


const socketio = require('socket.io')(server, {
  pingTimeout: 5000,
});

socketio.on('connection', (socket) => {
  socket.on('init', (userId) => {
    console.log('init', userId);
    sockets[userId.senderId] = socket;
  });
  socket.on('message', (message) => {
    if (sockets[message.receiverId]) {
			console.log('message',message)
      sockets[message.receiverId].emit('message', message);
    }
    handlers.createMessage(message);
  });
  socket.on('disconnect', (userId) => {
		console.log('disconnect', userId.senderId);
    delete sockets[userId.senderId];
  });
});
