import express from 'express'
import graphqlHTTP from 'express-graphql'

import weatherSchema from '../graphql/schema/weatherSchema'
import { saveWeatherReport } from '../services/weatherService'

const router = express.Router()

router.get('/weather', graphqlHTTP(() => ({
  schema: weatherSchema
})))

router.post('/weather', (req, res) => {
  const { weather } = req.body
  saveWeatherReport(weather)
    .then(results => {
      res.send({
        data: results
      })
    })
    .catch(error => {
      res.send(error).status(500)
    })
})

export default router
