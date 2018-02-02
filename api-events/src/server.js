import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import morgan from 'morgan';

import config from './config';
import openDatabase from './util/openDatabase';
import eventSchema from './graphql/schema/eventSchema';

mongoose.Promise = global.Promise;

const props = {
  ip: config.get('ip'),
  port: config.get('port'),
  dbUrl: config.get('db.url'),
};
const app = express();

app.use(morgan('tiny'));

const startApp = confg =>
  app.listen(confg.port, confg.ip, () => console.log(`Express Running ${props.ip}:${props.port}`));


const setRoutes = () => {
  app.get('/events', graphqlHTTP(() => ({
    schema: eventSchema,
  })));
};

openDatabase(props.dbUrl)
  .then(() => {
    startApp(props);
    setRoutes();
  })
  .catch(console.log);
