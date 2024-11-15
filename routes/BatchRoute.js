import express from 'express'
const route = express.Router()

import { GetBatchList, AvailableList, CreateBatchList, SetBatchList, GetBatchedDisbursement, RemoveFromBatchList, UpdateBatchDetails, AdditionalDisbursement } from '../controllers/Batch.js'

route.get('/getBatchList/:USR', GetBatchList)
route.get('/availableList', AvailableList)
route.post('/createBatchList', CreateBatchList)
route.post('/setBatchList/:BID/:MU/:Id', SetBatchList)
route.get('/getBatchedDisbursement/:BID', GetBatchedDisbursement)
route.post('/removeFromBatchList', RemoveFromBatchList)
route.post('/updateBatchDetails', UpdateBatchDetails)
route.post('/additionalDisbursement', AdditionalDisbursement)

export { route as BatchRoute }