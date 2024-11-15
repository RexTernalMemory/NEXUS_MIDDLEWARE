import express from 'express'
const route = express.Router()

import { GetOwnedProperties, AddOwnedProperties, EditOwnedProperties, DeleteOwnedProperties } from '../controllers/OwnedProperties.js'

route.get('/getOwnedProperties/:LAI', GetOwnedProperties)
route.post('/addOwnedProperties', AddOwnedProperties)
route.post('/editOwnedProperties', EditOwnedProperties)
route.post('/DeleteOwnedProperties/:Id', DeleteOwnedProperties)

export { route as OwnedPropertiesRoute }