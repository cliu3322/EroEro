import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import Cities from './models/City';


var getCXGCitiesQuery = require('./queries/getCXGCities.js');



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
    console.log(getCXGCitiesQuery);
    Cities.aggregate(getCXGCitiesQuery).exec(function(err, cities) {
      console.log(cities)
        if (cities) {

          res.status(201).json({

        allcities:cities

      });
        } else {
          res.status(204).json({

        allcities:cities

      });
        }
      });
  });

  app.use('/api', apiRoutes);
};
