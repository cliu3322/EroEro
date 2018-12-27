import express from 'express';
import bodyParser from 'body-parser';
import jsonwebtoken from 'jsonwebtoken';
import cors from 'cors';
import Config from './config';
import { authenticate, authError } from './middleware';
import router from './router';
import logger from 'morgan';
import mongoose from 'mongoose';
import session from 'express-session';

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
  }
});

app.get('/', (req, res) => {

	res.json({ status: 'OK' });
});

app.post('/api/login', (req, res) => {
	console.log(req.headers['x-forwarded-for'] || req.connection.remoteAddress);
	const { username, password } = req.body;
	const response = {};
	// You can use DB checking here

	if (doesUserExists(username, password)) {
		response.token = jsonwebtoken.sign(
			{
				expiredAt: new Date().getTime() + expiredAfter,
				username,
				id: 1,
			},
			secretKey
		);
	} else {
		response.error = 'Not found';
	}
	res.json(response);
});
app.use('/api/secret', [authenticate, authError]);
app.post('/api/secret/test', (req, res) => {
	res.json({
		status: 200,
		message: 'succcesful',
	});
});

app.get('/api/getCXGCities', (req, res) => {
	console.log('asds');
	res.json({ status: 'OK' });
});

app.get('/api/getCXGCities1', function (req, res, err) {

	console.log(err);

	City.find({ }).exec(function(err, files) {
			if (files) {

				res.status(201).json({

			allFilesDetail:files

		});
			} else {
				res.status(204).json({

			allFilesDetail:files

		});
			}
		});
});


app.listen(port, () => {
	console.log('Isomorphic JWT login ' + port);
});
