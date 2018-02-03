import WeatherModel from '../model/weatherModel'

export function saveWeatherReport(report) {
  return new WeatherModel(report).save()
}
