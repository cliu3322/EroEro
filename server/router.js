import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import Cities from './models/City';
import Record from './models/Record';
const path = require('path');


var getCXGCitiesQuery = require('./queries/getCXGCities.js');



export default function (app) {

  app.use('/images', express.static('uploads'));

  const apiRoutes = express.Router();


  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      //console.log(req.body.id)
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, new mongoose.Types.ObjectId()+path.extname(file.originalname))
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

  apiRoutes.get('/getCXGCities', function (req, res) {

    Cities.aggregate(getCXGCitiesQuery).exec(function(err, cities) {
      //console.log(cities)
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

  apiRoutes.post('/record', (req, res) => {
    console.log('record')
    if(!req.body.id) {
      const record = new Record({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        contactmethod: req.body.contactmethod,
        contactway: req.body.contactway,
        phone: req.body.phone,
        aphone: req.body.aphone,
        email: req.body.email,
        wechat: req.body.wechat,
        line: req.body.line,
        whatsapp: req.body.whatsapp,
        kakao: req.body.kakao,
        ethnicity: req.body.ethnicity,
        service: req.body.service,
      });

      record.save().then(result => {
        if (result) {
          res.status(201).json({
            _id:result._id
          });
        } else {
          res.status(204).json({
            message: "No file detail exist",
          });
        }
      }).catch(err => {
        console.log('err');
        res.status(500).json({
          error: err
        });
      });
    }
    else {
      Record.findOneAndUpdate(
        { _id: req.body.id },
        {
          city: req.body.city,
          address: req.body.address,
        }
      ).then(result => {
        if (result) {
          res.status(201).json({
            _id:result._id
          });
        } else {
          res.status(204).json({
            message: "No file detail exist",
          });
        }
      }).catch(err => {
        console.log('err');
        res.status(500).json({
          error: err
        });
      });
    }
  });

  apiRoutes.post('/image',upload.single('file'), (req, res) => {

    console.log('id',req.body.id);
    console.log('file',req.file);

    const record = new Record({
      _id: req.body.id,
    });

    Record.findOneAndUpdate(
      { _id: req.body.id },
      {
         $push: { images: req.file.filename },
      }
    ).then(result => {
      if (result) {
        res.status(201).json({
          _id:result._id
        });
      } else {
        res.status(204).json({
          message: "No file detail exist",
        });
      }
    }).catch(err => {
      console.log('err');
      res.status(500).json({
        error: err
      });
    });

  })

  apiRoutes.get('/getrecordlist', function (req, res) {
    //console.log('parames',req.query.id)
    Record.find({}).exec(function(err, records) {
      //console.log(records)
        if (records) {
          res.status(201).json(records);
        } else {
          res.status(204).json(records);
        }
      });
  });

  app.use('/api', apiRoutes);
};
