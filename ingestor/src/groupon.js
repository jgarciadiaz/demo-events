import mongoose from 'mongoose';

import config from './config';
import pullSourceCode from './util/pullSourceCode';
import saveEvents from './util/saveEvents';
import printReport from './util/printReport';
import openDatabase from './util/openDatabase';
import closeDatabase from './util/closeDatabase';

mongoose.Promise = global.Promise;

const props = {
  isProduction: config.get('env') === 'production',
  url: 'https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&offset=0&limit=20&filters=category:things-to-do',
  file: './samples/grpn.json',
  dbUrl: config.get('db.url'),
};

const getEvent = event => ({
  uuid: event.uuid,
  title: event.announcementTitle,
  url: event.dealUrl,
  description: event.title,
  image: event.grid6ImageUrl,
});

const getEvents = (html) => {
  const data = JSON.parse(html);
  return data.deals && data.deals.length ? data.deals.map(getEvent) : [];
};

openDatabase(props.dbUrl)
  .then(() => pullSourceCode(props))
  .then(getEvents)
  .then(saveEvents)
  .then(printReport)
  .catch(console.log)
  .then(closeDatabase);
