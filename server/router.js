import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import City from './models/City';


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

  apiRoutes.get('/getCXGCities', function (req, res) {

    console.log('asdfsdf');

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





  app.use('/api', apiRoutes);
};
