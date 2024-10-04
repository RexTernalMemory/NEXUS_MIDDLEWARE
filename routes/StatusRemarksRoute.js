import express from 'express'
const route = express.Router()

import { GetStatusList, GetRemarks, UpdateApplicationStatus } from '../controllers/StatusRemarks.js'

route.get('/getStatusList/:USID/:LAI', GetStatusList)
route.get('/getRemarks/:LAI', GetRemarks)
route.post('/updateApplicationStatus', UpdateApplicationStatus)

export { route as StatusRemarksRoute }