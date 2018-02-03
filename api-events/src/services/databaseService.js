import mongoose from 'mongoose'

mongoose.Promise = global.Promise

export function openDatabase(dbUrl) {
  return mongoose.connect(dbUrl, { useMongoClient: true })
}
