import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import morgan from 'morgan'
import compression from 'compression'
import { Server } from 'socket.io'
import { createServer } from 'http'
import fs from 'fs';
import path from 'path'
import https from 'https'

import os from 'os'
import dns from 'dns'

import { AgencyRoute } from './routes/AgencyRoute.js'
import { UserAccountRoute } from './routes/UserAccountRoutes.js'
import { RoleAccessRoute } from './routes/RoleAccessRoutes.js'
import { RelativesRoute } from './routes/RelativesRoutes.js'
import { ProvinceRoute } from './routes/ProvinceRoutes.js'
import { OfwRoute } from './routes/OfwRoutes.js'
import { MunicipalityRoute } from './routes/MunicipalityRoutes.js'
import { LoanDetailsRoute } from './routes/LoanDetailsRoutes.js'
import { KaiserRoute } from './routes/KaiserCheckerRoute.js'
import { FileUploadRoute } from './routes/FileUploadRoute.js'
import { CountryRoute } from './routes/CountryRoute.js'
import { CharacterReferenceRoute } from './routes/CharacterReferenceRoute.js'
import { BarangayRoute } from './routes/BarangayRoute.js'
import { ApplyLoanRoute } from './routes/ApplyLoanRoute.js'
import { ApplicationUpdateRoute } from './routes/ApplicationUpdateRoute.js'
import { ApplicationDataRoute } from './routes/ApplicationDataRoute.js'
import { AddAdditionalCoborrowerRoute } from './routes/AdditionalCoborrowerRoute.js'
import { GetDataRoute } from './routes/GetDataRoutes.js'
import { GetRoutes } from './routes/GetRoutes.js'
import { BatchRoute } from './routes/BatchRoute.js'
import { BankRoute } from './routes/BankRoute.js'
import { DisbursementRoute } from './routes/DisbursementRoute.js'
import { EmploymentHistoryRoute } from './routes/EmploymentHistoryRoute.js'
import { LoanApprovalRoute } from './routes/LoanApprovalRoute.js'
import { OwnedAssetsRoute } from './routes/OwnedAssetsRoute.js'
import { OwnedPropertiesRoute } from './routes/OwnedPropertiesRoute.js'
import { SofiaRoute } from './routes/SofiaRoute.js'
import { VesselFinderRoute } from './routes/VesselFinderRoute.js'
import { PostRoutes } from './routes/PostRoutes.js'
import { StatusRemarksRoute } from './routes/StatusRemarksRoute.js'
import { BorrowersLoanHistoryRoute } from './routes/BorrowersLoanHistoryRoute.js'
import { BranchRoute } from './routes/BranchRoute.js'
import { NDIRoute } from './routes/NDIRoute.js'
import { VerifyRoute } from './routes/VerifyRoute.js'
import { WildSearchRoute } from './routes/WildSearchRoute.js'

dotenv.config()
const app = express()
app.use(compression())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Access-Control-Allow-Credentials",
    ],
}))
const { PORT, ACCESS } = process.env;

app.use(ACCESS, UserAccountRoute)
app.use(ACCESS, RoleAccessRoute)
app.use(ACCESS, RelativesRoute)
app.use(ACCESS, ProvinceRoute)
app.use(ACCESS, OfwRoute)
app.use(ACCESS, MunicipalityRoute)
app.use(ACCESS, LoanDetailsRoute)
app.use(ACCESS, KaiserRoute)
app.use(ACCESS, FileUploadRoute)
app.use(ACCESS, CountryRoute)
app.use(ACCESS, CharacterReferenceRoute)
app.use(ACCESS, BarangayRoute)
app.use(ACCESS, ApplyLoanRoute)
app.use(ACCESS, ApplicationUpdateRoute)
app.use(ACCESS, ApplicationDataRoute)
app.use(ACCESS, AddAdditionalCoborrowerRoute)
app.use(ACCESS, GetDataRoute)
app.use(ACCESS, BatchRoute)
app.use(ACCESS, BankRoute)
app.use(ACCESS, DisbursementRoute)
app.use(ACCESS, EmploymentHistoryRoute)
app.use(ACCESS, LoanApprovalRoute)
app.use(ACCESS, OwnedAssetsRoute)
app.use(ACCESS, OwnedPropertiesRoute)
app.use(ACCESS, SofiaRoute)
app.use(ACCESS, VesselFinderRoute)
app.use(ACCESS, StatusRemarksRoute)
app.use(ACCESS, AgencyRoute)
app.use(ACCESS, BorrowersLoanHistoryRoute)
app.use(ACCESS, BranchRoute)
app.use(ACCESS, NDIRoute)
app.use(ACCESS, VerifyRoute)
app.use(ACCESS, WildSearchRoute)

//Compresed Routes
app.use(ACCESS, GetRoutes)
app.use(ACCESS, PostRoutes)


app.get(`${ACCESS}/test`, (req, res) => {
    res.send('ANO NG GALING MO');
});

let platform = os.hostname()
let arch = os.networkInterfaces()
let usr = os.userInfo()

app.get(`${ACCESS}/tester`, (req, res) => {
    console.log(platform)
    console.log(arch)
    console.log(usr)
});

app.get(`${ACCESS}/hostname`, (req, res) => {
    console.log(req.ip)
    console.log(req.ips)
});

app.listen(PORT, () => console.log(`Server Status: Listening on port ${PORT}`))

const server = createServer(app)

const io = new Server(server)

io.on('connection', (socket) => {
    socket.on('User Login', (NAME, BRANCH, USRID) => {
        console.log(`${NAME} is online`)
    })

    socket.on('User Logout', (NAME, BRANCH, USRID) => {
        console.log(`${NAME} is offline`)
    })

    socket.on('Notification', (BRANCH, USRID) => {

    })
})

// server.listen(() => {
//     console.log(`IO Server: Listening on port ${PORT}`)
// })

/*let value = 0;
cron.schedule('* * * * *', () => {
    console.log('WORKING: ' + value);
    value += 1
})*/

//const httpsServer = https.createServer({}, app) //creating https server with an empty ssl certificate object
//httpsServer.listen(HTTPS_PORT, () => {
//    console.log(`HTTPS Server: Listening on port ${HTTPS_PORT}`)
//})