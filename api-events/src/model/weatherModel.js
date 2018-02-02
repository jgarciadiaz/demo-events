import mongoose from 'mongoose'

const WeatherSchema = new mongoose.Schema({
  celsius: String,
  fahrenheit: String,
  pressure: String,
  relativeHumidity: String,
  lightLevel: String,
  city: String,
  gps: String,
})

const WeatherModel = mongoose.model('weather', WeatherSchema)

export default WeatherModel
