import express from 'express'
const route = express.Router()

import { GetAgency, AddAgency,EditAgency } from '../controllers/Agency.js'

route.get('/getAgency', GetAgency)
route.post('/addAgency', AddAgency)
route.post('/editAgency', EditAgency)

export { route as AgencyRoute }