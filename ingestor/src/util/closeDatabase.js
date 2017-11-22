import mongoose from 'mongoose';

const closeDatabase = () => mongoose.disconnect();

export default closeDatabase;
