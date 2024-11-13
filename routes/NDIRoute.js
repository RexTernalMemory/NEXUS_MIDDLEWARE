import express from "express";
const route = express.Router()

import { GetNDI, AddNDISelection } from "../controllers/NDI";

route.get('/getNDI/:QTY', GetNDI)
route.post('/addNDISelection/:QTY/:NAME/:USR', AddNDISelection)

export { route as NDIRoute }