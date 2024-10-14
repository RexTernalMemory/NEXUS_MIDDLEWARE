import express from "express";
const route = express.Router()

import { VerifyUser } from "../controllers/Verify.js";

route.post('/verify/user/:token', VerifyUser)

export { route as VerifyRoute}