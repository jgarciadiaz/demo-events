import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  uuid: String,
  title: String,
  description: String,
  url: String,
  image: String,
});

const GrpnEvent = mongoose.model('event', EventSchema);

export default GrpnEvent;
