import EventML from './services/eventML'
import { openDatabase, closeDatabase } from './services/databaseService'
import { listEvents } from './services/eventService'
import config from './config'

openDatabase(config.get('db.url'))
  .then(() => {
		listEvents().then(events => {
			const eventML = new EventML()
			eventML.run()
			const defaultScore = 0

			const promises = events.map(event => {
				const prediction = eventML.getPrediction(event.description)
				event.score = parseInt(prediction[0] || defaultScore)
				return event.save()
			})

			Promise.all(promises)
				.then(results => {
					console.log(`${results.length} predictions made :)`)
					closeDatabase()
				})
		})
  })
  .catch(console.log)



