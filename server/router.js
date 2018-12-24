import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';


export default function (app) {

  const apiRoutes = express.Router();


  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log(file.originalname)
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

  // var upload = multer({ storage: storage })

  var upload = multer({
    storage: storage,
    onError : function(err, next) {
      console.log('error', err);
      next(err);
    }
  });

  apiRoutes.post("/uploadFile", upload.single('file'), function (req, res, next) {

  });





  app.use('/api', apiRoutes);
};
