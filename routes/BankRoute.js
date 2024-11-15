import express from 'express'
const route = express.Router()

import {GetPaymentType,GetPurposeList } from '../controllers/Bank.js'

route.post('/getPaymentType', GetPaymentType)
route.post('/getPurposeList', GetPurposeList)

export { route as BankRoute }