import express from 'express'
const route = express.Router()
import {
    GetListRelationship, GetCountry, GetIDtype, GetAgency, GetSuffix, GetCollectionArea, GetJobCategory, GetPosition
} from '../controllers/OfwDetails.js'

route.get('/getListRelationship', GetListRelationship)
route.get('/OFWDetails/getCountry', GetCountry)
route.get('/OFWDetails/getIDtype', GetIDtype)
route.get('/OFWDetails/GetAgency', GetAgency)
route.get('/OFWDetails/GetSuffix', GetSuffix)
route.get('/OFWDetails/getCollectionArea', GetCollectionArea)
route.get('/OFWDetails/getJobCategory', GetJobCategory)
route.get('/OFWDetails/getPosition.:category', GetPosition)

export { route as OfwRoute }