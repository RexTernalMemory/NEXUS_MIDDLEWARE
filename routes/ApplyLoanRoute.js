import express from 'express'
const route = express.Router()

import { AddLCClient, AddDirectClient } from '../controllers/ApplyLoan.js'

route.post('/addLCClient', AddLCClient)
route.post('/addDirectClient', AddDirectClient)

export { route as ApplyLoanRoute }