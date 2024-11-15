import express from 'express'
const route = express.Router()

import {
    Register, UpdateUser, GetUsers, GetUserInfo, Login, PasswordAttempt,
    VerifiedAccount, ResendOTP, CancelOTP, GetBrachNameList, GetDepartmentList,
    GetRoleList, VerifyOtp, ForgotPassword, UnlockAccount, ValidateURL, CheckPassword,
    ResetPassword, SavePassword, ReseterPassword, CraList, CraAssign
} from '../controllers/UserAccounts.js'

route.post('/register', Register)
route.post('/updateUser', UpdateUser)
route.get('/getUsers', GetUsers)
route.get('/getUserInfo/:id', GetUserInfo)
route.post('/login', Login)
route.post('/passwordAttempt', PasswordAttempt)
route.post('/verifiedAccount', VerifiedAccount)
route.post('/resendOtp/:Username', ResendOTP)
route.post('/cancelOtp/:Username', CancelOTP)
route.get('/getBrachNameList', GetBrachNameList)
route.get('/getDepartmentList', GetDepartmentList)
route.get('/getRoleList/:id', GetRoleList)
route.post('/verifyOtp', VerifyOtp)
route.post('/forgotPassword/:Username', ForgotPassword)
route.post('/unlockAccount/:Username', UnlockAccount)
route.post('/validateURL/:URL', ValidateURL)
route.post('/checkPassword/:id', CheckPassword)
route.post('/user-management/resetPassword', ResetPassword)
route.post('/savePassword', SavePassword)
route.post('/resetPassword', ReseterPassword)
route.get('/craList', CraList)
route.post('/craAssign', CraAssign)

export { route as UserAccountRoute }