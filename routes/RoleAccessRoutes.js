import express from 'express'
const route = express.Router()

import { DefaultAccessList, CustomAccessList, UpdateRole } from '../controllers/RoleAccess.js'
route.post('/defaultAccessList', DefaultAccessList)
route.post('/customAccessList', CustomAccessList)
route.post('/updateRole', UpdateRole)

export { route as RoleAccessRoute }