import express from "express";
const route = express.Router()

import { Shipvessel_Details } from "../controllers/VesselFinder.js";

route.post('/shipvessel_Details/:IMO', Shipvessel_Details)

export { route as VesselFinderRoute }