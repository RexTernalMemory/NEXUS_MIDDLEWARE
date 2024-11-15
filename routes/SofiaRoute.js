import express from 'express'
const route = express.Router()

import { TransferToSofia, GetDataFromSofia } from '../controllers/Sofia.js'

route.post('/TransferToSofia/:LAID', TransferToSofia)
route.post('/GetDataFromSofia', GetDataFromSofia)

export { route as SofiaRoute }