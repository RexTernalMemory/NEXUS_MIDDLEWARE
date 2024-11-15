import express from 'express'
const route = express.Router()

import { GetTrackLoan, GetAppDataList, GetClientDataList, CheckLoan, GetDuplicateLoans,GetTileCont } from '../controllers/ApplicationData.js'

route.post('/getTrackLoan', GetTrackLoan)
route.get('/getAppDataList/:USID/:TILE', GetAppDataList)
route.get('/getClientDataList/:First', GetClientDataList)
route.post('/checkLoan', CheckLoan)
route.get('/getDuplicateLoans/:FN/:LN/:LAI', GetDuplicateLoans)
route.get('/tileCount', GetTileCont)

export { route as ApplicationDataRoute }