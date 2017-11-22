import mongoose from 'mongoose';

const openDatabase = dbUrl => mongoose.connect(dbUrl, { useMongoClient: true });

export default openDatabase;
