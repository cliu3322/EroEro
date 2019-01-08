import bcrypt from 'bcrypt';
import Boom from 'boom';
import JWT from 'jsonwebtoken';

import User from '../db/models/user';
import config from '../config';
import sanitizeUser from '../helpers/sanitizeUser';

const secret = config.secretKey;
const expiresIn = config.expiredAfter;

const getHashedPassword = (password) => {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
};

export default async function (request, res) {
  console.log('body',request.body)
  console.log('payload',request.payload)
  let newUser;
  await User.findOne({ email: request.body.email }).then(
    (user) => {
      if (!user) {
        const hashedPassword = getHashedPassword(request.body.password);
        newUser = new User({
          username: request.body.username,
          email: request.body.email,
          password: hashedPassword,
        });
        newUser.save((err) => { console.log(err); });
        const token = JWT.sign({ email: newUser.email }, secret, { expiresIn });
        res.json({
      		token,
      		user: sanitizeUser(newUser),
      	});
      }
      res.json({
        message: "User already exists",
      });
    });
}
