import express from 'express'
const route = express.Router()
import { GetRelativesRelationship, GetRelativesSuffix, GetRelatives, AddRelatives, EditRelatives, Relativedelete } from '../controllers/Relatives.js'

route.get('/getRelativesRelationship', GetRelativesRelationship)
route.get('/getRelativesSuffix', GetRelativesSuffix)
route.get('/getRelatives/:BorrowerId', GetRelatives)
route.post('/addRelatives', AddRelatives)
route.post('/editRelatives', EditRelatives)
route.post('/Relativedelete/:Code', Relativedelete)

export { route as RelativesRoute }