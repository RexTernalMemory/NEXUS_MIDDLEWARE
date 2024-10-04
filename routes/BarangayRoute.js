import express from 'express'
const route = express.Router()

import { GetBarangay, GetMuniArea, GetBarangayList, GetProvince, AddBarangay, EditBarangay } from '../controllers/Barangay.js'

route.get('/getBarangay', GetBarangay)
route.get('/getMuniArea/:provinceCode', GetMuniArea)
route.get('/getBarangayList/:MuniCode', GetBarangayList)
route.get('/getProvince', GetProvince)
route.post('/addBarangay', AddBarangay)
route.post('/editBarangay', EditBarangay)

export { route as BarangayRoute }