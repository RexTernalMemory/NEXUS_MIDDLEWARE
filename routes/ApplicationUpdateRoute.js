import express from 'express'
const route = express.Router()

import { UpdateDetails, UpdateAppLCDetails, UpdateAppDetails } from '../controllers/ApplicationUpdate.js'

route.post('/updateDetails', UpdateDetails)
route.post('/updateAppLCDetails', UpdateAppLCDetails)
route.post('/updateAppDetails', UpdateAppDetails)

export { route as ApplicationUpdateRoute }