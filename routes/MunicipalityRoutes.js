import express from 'express'
const route = express.Router()
import { GetMunicipalityArea, GetProvinceList, GetMunicipalityList, GetBarangayList, AddMunicipality,
    EditMunicipality
 } from '../controllers/Municipality.js'

route.get('/getMunicipalityArea', GetMunicipalityArea)
route.get('/getProvinceList', GetProvinceList)
route.post('/getMunicipalityList', GetMunicipalityList)
route.post('/getBarangayList', GetBarangayList)
route.post('/addMunicipality', AddMunicipality)
route.post('/editMunicipality', EditMunicipality)

export { route as MunicipalityRoute }