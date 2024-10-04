import express from 'express'
const route = express.Router()

import { GetInternationalSubGroup, GetInternationalGroup, AddCountry, EditCountry, GetCountryList } from '../controllers/Country.js'

route.get('/getInternationalSubGroup', GetInternationalSubGroup)
route.post('/getInternationalGroup', GetInternationalGroup)
route.post('/addCountry', AddCountry)
route.post('/editCountry', EditCountry)
route.get('/getCountryList', GetCountryList)

export { route as CountryRoute }