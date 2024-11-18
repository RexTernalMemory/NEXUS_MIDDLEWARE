import express from "express";
const route =express.Router()
import { GetBranchList, GetBranch, AddBranch, UpdateBranch } from "../controllers/Branch.js";

route.get('/getBranchList', GetBranchList)
route.get('/getBranch', GetBranch)
route.post('/addBranch', AddBranch)
route.post('/updateBranch', UpdateBranch)

export { route as BranchRoute }