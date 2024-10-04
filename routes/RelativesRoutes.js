import express from 'express'
const route = express.Router()
import { GetRelativesRelationship, GetRelativesSuffix, GetRelatives, AddRelatives, EditRelatives, Relativedelete } from '../controllers/Relatives.js'

route.get('/getRelativesRelationship', GetRelativesRelationship)
route.get('/getRelativesSuffix', GetRelativesSuffix)
route.get('/getRelatives/:RID', GetRelatives)
route.post('/addRelatives', AddRelatives)
route.post('/editRelatives', EditRelatives)
route.post('/Relativedelete/:BorrowersId', Relativedelete)

export { route as RelativesRoute }