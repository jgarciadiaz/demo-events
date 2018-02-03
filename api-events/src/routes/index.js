import express from 'express'

import eventsRoute from './eventRoutes'
import weatherRoute from './weatherRoutes'

const router = express.Router()

router.use('/', eventsRoute)
router.use('/', weatherRoute)

export default router
