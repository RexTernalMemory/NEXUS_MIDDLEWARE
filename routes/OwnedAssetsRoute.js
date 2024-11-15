import express from 'express'
const route = express.Router()

import { GetOwnedAssets, AddOwnAsset, EditOwnedAsset, DeleteOwnedAssets } from '../controllers/OwnedAssets.js'

route.get('/getOwnedAssets/:LAI', GetOwnedAssets)
route.post('/addOwnAsset', AddOwnAsset)
route.post('/editOwnedAsset', EditOwnedAsset)
route.post('/DeleteOwnedAssets/:Id', DeleteOwnedAssets)

export { route as OwnedAssetsRoute }