import express from 'express'
const route = express.Router()

import { GetEmploymentHistory, EditEmploymentHistory, AddEmploymentHistory, EmploymentHistory, DeleteEmploymentHistory } from '../controllers/EmploymentHistory.js'

route.get('/getEmploymentHistory/:LAI', GetEmploymentHistory)
route.post('/editEmploymentHistory', EditEmploymentHistory)
route.post('/addEmploymentHistory', AddEmploymentHistory)
route.post('/EmploymentHistory/:Id', EmploymentHistory)
route.post('/DeleteEmploymentHistory/:Id', DeleteEmploymentHistory)

export { route as EmploymentHistoryRoute }