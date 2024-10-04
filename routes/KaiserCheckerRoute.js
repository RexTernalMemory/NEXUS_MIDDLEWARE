import express from 'express'
const route = express.Router()
import { GetKaiser } from '../controllers/KaiserChecker.js'

route.post('/getKaiser/:fullname', GetKaiser)

export { route as KaiserRoute }