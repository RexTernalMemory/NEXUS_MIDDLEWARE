import express from 'express'
const route = express.Router()

import { GetRelationship, GetCharacterRef, AddCharacterRef, EditCharacterRef,DeleteCharacterRef } from '../controllers/CharacterReference.js'

route.get('/getRelationship', GetRelationship)
route.get('/getCharacterRef/:CI', GetCharacterRef)
route.post('/addCharacterRef', AddCharacterRef)
route.post('/editCharacterRef', EditCharacterRef)
route.post('/delete/:CharacterRefId', EditCharacterRef)

export { route as CharacterReferenceRoute }