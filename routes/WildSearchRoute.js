import express from "express";
const route = express.Router()

import { GetWildSearch } from "../controllers/WildSearch.js";

route.get("/getWildSearch/:userID/:searching", GetWildSearch);

export {route as WildSearchRoute}