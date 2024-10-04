import express from 'express'
const route = express.Router()

import { GetTrackLoan, GetAppDataList, GetClientDataList, CheckLoan, GetDuplicateLoans } from '../controllers/ApplicationData.js'

route.post('/getTrackLoan', GetTrackLoan)
route.get('/getAppDataList/:USID/:TILE', GetAppDataList)
route.get('/getClientDataList/:LAI', GetClientDataList)
route.post('/checkLoan', CheckLoan)
route.post('/getDuplicateLoans', GetDuplicateLoans)

export { route as ApplicationDataRoute }