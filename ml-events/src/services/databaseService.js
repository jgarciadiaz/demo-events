import mongoose from 'mongoose'

mongoose.Promise = global.Promise

export function openDatabase(dbUrl) {
  return mongoose.connect(dbUrl)
}

export function closeDatabase() {
  mongoose.connection.close()
}
