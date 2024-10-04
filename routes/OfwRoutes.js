import express from 'express'
const route = express.Router()
import {
    GetListRelationship, GetCountry, GetIDtype, GetAgency, GetSuffix
} from '../controllers/OfwDetails.js'

route.get('/getListRelationship', GetListRelationship)
route.get('/OFWDetails/getCountry', GetCountry)
route.get('/OFWDetails/getIDtype', GetIDtype)
route.get('/OFWDetails/GetAgency', GetAgency)
route.get('/OFWDetails/GetSuffix', GetSuffix)

export { route as OfwRoute }