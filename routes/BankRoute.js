import express from 'express'
const route = express.Router()

import {GetPaymentList,GetPurposeList } from '../controllers/Bank.js'

route.post('/getPaymentList', GetPaymentList)
route.post('/getPurposeList', GetPurposeList)

export { route as BankRoute }