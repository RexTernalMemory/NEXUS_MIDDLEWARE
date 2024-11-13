import express from 'express'
const route = express.Router()
import { GetFileType, GetFileList, UploadFileReq, UploadFileFin, UpdateFileStatus } from '../controllers/FileUpload.js'
import { upload } from '../middleware/FileAuth.js'

route.get('/getFileType/:loan_type', GetFileType)
route.get('/getFileList/:LAI/:PRID/:USRID', GetFileList)
route.post('/uploadFileReq', upload.array('files'), UploadFileReq)
route.post('/uploadFileFin', upload.array('files'), UploadFileFin)
route.post('/updateFileStatus', UpdateFileStatus)

export { route as FileUploadRoute }