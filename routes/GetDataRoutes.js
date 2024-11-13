import express from 'express'
const route = express.Router()

import { GetDataParams } from '../controllers/GET_Params.js'

route.get('/Collection/:id', GetDataParams)

export { route as GetDataRoute }