import express from 'express'
const route = express.Router()

import { GetDisbursementList, CreateDisbursement, UpdateDisbursement, DeleteDisbursement, UpdateStatDisbursement, UpdateFileNameBatch } from '../controllers/Disbursement.js'

route.get('/getDisbursementList/:LAN/:TYPE', GetDisbursementList)
route.post('/createDisbursement', CreateDisbursement)
route.post('/updateDisbursement', UpdateDisbursement)
route.post('/deleteDisbursement/:ID', DeleteDisbursement)
route.post('/updateStatDisbursement/:ID/:USER/:STATUS', UpdateStatDisbursement)
route.post('/updateFileNameBatch/:ID/:FILENAME', UpdateFileNameBatch)

export { route as DisbursementRoute }