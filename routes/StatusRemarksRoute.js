import express from 'express'
const route = express.Router()

import { GetStatusList, GetRemarks, UpdateApplicationStatus, UpdateLackOfDocs } from '../controllers/StatusRemarks.js'

route.get('/getStatusList/:USID/:LAI', GetStatusList)
route.get('/getRemarks/:LAI', GetRemarks)
route.post('/updateApplicationStatus', UpdateApplicationStatus)
route.post('/UpdateLackOfDocs/:LAI/:USER', UpdateLackOfDocs)

export { route as StatusRemarksRoute }