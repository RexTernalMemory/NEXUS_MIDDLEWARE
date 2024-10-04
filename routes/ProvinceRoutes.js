import express from 'express'
const route = express.Router()
import { GetProvinceselection } from '../controllers/Province.js'

route.get('/getProvinceselection', GetProvinceselection)

export { route as ProvinceRoute }