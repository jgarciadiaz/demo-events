import express from 'express'
import graphqlHTTP from 'express-graphql'

import eventSchema from '../graphql/schema/eventSchema'
import { saveEvent } from '../services/eventService'

const router = express.Router()

router.get('/events', graphqlHTTP(() => ({
  schema: eventSchema
})))

router.post('/events', (req, res) => {
  const { events } = req.body
  const promises = events.map(saveEvent)
  Promise.all(promises)
    .then(results => {
      res.send({
        data: results.length
      })
    })
    .catch(error => {
      res.send(error).status(500)
    })
})

export default router
