import express from 'express'
const route = express.Router()

import { GetStatusList, GetRemarks, UpdateApplicationStatus, UpdateLackOfDocs, UpdateCheckListForApproval, UpdateDepartDate } from '../controllers/StatusRemarks.js'

route.get('/getStatusList/:USID/:LAI', GetStatusList)
route.get('/getRemarks/:LAI', GetRemarks)
route.post('/updateApplicationStatus', UpdateApplicationStatus)
route.post('/UpdateLackOfDocs/:LAI/:USER', UpdateLackOfDocs)
route.post('/updateCheckListForApproval', UpdateCheckListForApproval)
route.post('/updateDepartDate', UpdateDepartDate)

export { route as StatusRemarksRoute }