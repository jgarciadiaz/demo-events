import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  uuid: { type: String, unique: true },
  title: String,
  description: String,
  url: String,
  image: String,
  score: Number
});

const GrpnEvent = mongoose.model('event', EventSchema);

export default GrpnEvent;
