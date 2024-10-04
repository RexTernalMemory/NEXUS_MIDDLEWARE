import express from 'express'
const route = express.Router()
import { GetFileType, GetFileList, UploadFileReq, UploadFileFin, UpdateFileStatus } from '../controllers/FileUpload.js'

route.get('/getFileType/:loan_type', GetFileType)
route.get('/getFileList/:LAI/:PRID', GetFileList)
route.post('/uploadFileReq', UploadFileReq)
route.post('/uploadFileFin', UploadFileFin)
route.post('/updateFileStatus', UpdateFileStatus)

export { route as FileUploadRoute }