import express from "express";
const route = express.Router()

import { VerifyUser } from "../controllers/Verify";

route.post('/verify/user/:token', VerifyUser)

export { route as VerifyRoute}