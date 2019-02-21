import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import Cities from './models/City';
import Record from './models/Record';
import CityxRecord from './models/CityxRecord';
const path = require('path');


var getCXGCitiesQuery = require('./queries/getCXGCities.js');



export default function (app) {

  app.use('/images', express.static('uploads'));

  const apiRoutes = express.Router();


  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log('req.body')
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
        res.status(201).json({allcities:cities});
      } else {}
    })
  });

  apiRoutes.post('/record', (req, res) => {

    switch(req.body.type) {
      case 'RECORDADD_ADD_BASIC':
        const record = new Record({
          _id: new mongoose.Types.ObjectId(),
          username: req.body.payload.username,
          name: req.body.payload.name,
          contactmethod: req.body.payload.contactmethod,
          contactway: req.body.payload.contactway,
          phone: req.body.payload.phone,
          aphone: req.body.payload.aphone,
          email: req.body.payload.email,
          wechat: req.body.payload.wechat,
          line: req.body.payload.line,
          whatsapp: req.body.payload.whatsapp,
          kakao: req.body.payload.kakao,
          ethnicity: req.body.payload.ethnicity,
          service: req.body.payload.service,
          createdate:Date.now()
        });

        record.save().then(result => {
          if (result) {
            res.status(201).json({
              _id:result._id
            });
          } else {
            res.status(204).json({
              message: "no id output",
            });
          }
        }).catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
        break;
      case 'UPDATE_ADDRESS':
        Record.findOneAndUpdate(
          { _id: req.body.payload.id },
          {
            city: req.body.payload.city,
            address: req.body.payload.address,
            markers: req.body.payload.markers,
            locationId: req.body.payload.city[2]
          }
        ).then(result => {
          if (result) {
            res.status(201).json({
              _id:result._id
            });
          } else {
            res.status(204).json({
              message: "No location id output",
            });
          }
        }).catch(err => {
          console.log('err');
          res.status(500).json({
            error: err
          });
        });
        break;
      case 'UPDATE_STATUS':
        Record.findOneAndUpdate(
          { _id: req.body.payload.id },
          {
            status: req.body.payload.status,
            postdate:Date.now()
          }
        ).then(result => {
          if (result) {
            res.status(201).json({
              _id:result._id
            });
          } else {
            res.status(204).json({
              message: "No location id output",
            });
          }
        }).catch(err => {
          console.log('err');
          res.status(500).json({
            error: err
          });
        });
        break;
      default:
        // code block
    }

    console.log(req.body)
    if(!req.body.id) {

    }
    else {

    }
  });

  apiRoutes.post('/image',upload.array('files[]'), (req, res) => {

    const record = new Record({
      _id: req.body.id,
    });

    let fileNameResult = req.files.map(a => a.filename);

    Record.findOneAndUpdate(
      { _id: req.body.id },
      {
         $push: { images: fileNameResult },
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

    Record.find({locationId:req.query.id}).exec(function(err, records) {

      if (records) {
        res.status(201).json(records);
      } else {
        res.status(204).json(records);
      }
    });
  });

  apiRoutes.get('/getcityxrecordlist', function (req, res) {
    console.log(req.query)
    CityxRecord.find({locationId:req.query.id}).exec(function(err, records) {
      console.log(records)
      if (records) {
        res.status(201).json(records);
      } else {
        res.status(204).json(records);
      }
    });
  });

  apiRoutes.get('/getmypost', function (req, res) {

    Record.find({username:req.query.username}).exec(function(err, records) {
      if (records) {
        res.status(201).json(records);
      } else {
        res.status(204).json(records);
      }
    });
  });

  app.use('/api', apiRoutes);
};
