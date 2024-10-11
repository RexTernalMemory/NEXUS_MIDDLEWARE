import express from "express";
const route = express.Router()
import { GetOtherLoanHistory, AddLoanHistory, EditOtherLoanHistory,DeleteOtherLoanHistory } from "../controllers/BorrowersLoanHistory";

route.get('/getOtherLoanHistory/:LAI', GetOtherLoanHistory)
route.post('/addLoanHistory', AddLoanHistory)
route.post('/editOtherLoanHistory', EditOtherLoanHistory)
route.post('/DeleteOtherLoanHistory/:Id', DeleteOtherLoanHistory)

export {route as BorrowersLoanHistoryRoute}