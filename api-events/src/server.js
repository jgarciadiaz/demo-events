import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import config from './config';
import openDatabase from './util/openDatabase';
import eventSchema from './graphql/schema/eventSchema';
import EventModel from './model/eventModel'

mongoose.Promise = global.Promise;

const props = {
  ip: config.get('ip'),
  port: config.get('port'),
  dbUrl: config.get('db.url'),
};
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

const startApp = confg =>
  app.listen(confg.port, confg.ip, () => console.log(`Express Running ${props.ip}:${props.port}`));


const setRoutes = () => {
  app.get('/events', graphqlHTTP(() => ({
    schema: eventSchema,
  })));

  app.post('/events', (req, res) => {
    const { events } = req.body
    const promises = events.map(event => new EventModel(event).save())
    Promise.all(promises)
      .then(results => {
        res.send({
          status: true,
          data: results.length
        })
      })
      .catch(error => {
        res.send({
          status: false,
          error: error.message
        })
      })
  })
};

openDatabase(props.dbUrl)
  .then(() => {
    startApp(props);
    setRoutes();
  })
  .catch(console.log);
