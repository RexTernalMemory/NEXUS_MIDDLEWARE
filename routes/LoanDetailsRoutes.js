import express from 'express'
const route = express.Router()
import { GetListLoanProduct, GetLoanPurpose, GetLoanConsultant } from '../controllers/LoanDetails.js'

route.get('/getListLoanProduct', GetListLoanProduct)
route.get('/getLoanPurpose', GetLoanPurpose)
route.get('/getLoanConsultant', GetLoanConsultant)

export { route as LoanDetailsRoute }