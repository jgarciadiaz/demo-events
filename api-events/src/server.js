import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import { openDatabase } from './services/databaseService'
import routes from './routes'
import config from './config'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('tiny'))

openDatabase(config.get('db.url'))
  .then(() => {
    app.use('/', routes)
    app.listen(config.get('port'), config.get('ip'), () => console.log(`Running on ${config.get('ip')}:${config.get('port')}`))
  })
  .catch(console.log)
