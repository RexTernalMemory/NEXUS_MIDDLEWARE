import express from "express";
const route = express.Router()

import { GetNDI, AddNDISelection, GetNDIData, UpdateNDI, DeleteNDI } from "../controllers/NDI.js";

route.get('/getNDI/:QTY', GetNDI)
route.post('/addNDISelection/:QTY/:NAME/:USR', AddNDISelection)
route.get('/getNDIData/:loanApp/:borrow/:type/:user/:date', GetNDIData)
route.post('/updateNDI', UpdateNDI)
route.post('/deleteNDI', DeleteNDI)

export { route as NDIRoute }