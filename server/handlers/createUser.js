import bcrypt from 'bcrypt';
import Boom from 'boom';
import jsonwebtoken from 'jsonwebtoken';

import User from '../db/models/user';
import config from '../config';
import sanitizeUser from '../helpers/sanitizeUser';

const secretKey = config.secretKey;
const expiredAfter = config.expiredAfter;

const getHashedPassword = (password) => {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
};

export default async function (request, res) {
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
        newUser.save().then(result => {
          const response = {};
          response.token = jsonwebtoken.sign(
  					{
  						expiredAt: new Date().getTime() + expiredAfter,
  						username: result.username,
  					},
  					secretKey
  				)
          console.log(response)
          res.json(response);
        }).catch(err => {
          console.log('err',err);
          res.status(500).json({
            error: err
          });
        });

      } else {
        console.log("User already exists")
        res.json({
          message: "User already exists",
        });
      }
    });
}
