import express from 'express'
const route = express.Router()

import { GetApproval } from '../controllers/LoanApprovals.js'

route.get('/getApproval/:LAI', GetApproval)

export { route as LoanApprovalRoute }