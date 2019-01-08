import express from 'express';
import mongoose from 'mongoose';

import * as handlers from './handlers';


export default function (app) {

  const apiRoutes = express.Router();

  apiRoutes.post('/conversations', handlers.createConversation);

  app.use('/api', apiRoutes);
};
