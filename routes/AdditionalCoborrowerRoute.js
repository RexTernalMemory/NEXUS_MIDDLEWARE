import express from 'express'
const route = express.Router()

import { AddAdditionalCoborrower, AdditionalCoborrowerdelete } from '../controllers/AdditionalCoborrower.js'

route.post('/addAdditionalCoborrower', AddAdditionalCoborrower)
route.post('/additionalCoborrowerdelete/:LID', AdditionalCoborrowerdelete)

export { route as AddAdditionalCoborrowerRoute }