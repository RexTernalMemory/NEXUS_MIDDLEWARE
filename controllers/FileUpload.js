import axios from "axios";
import fs from 'fs'

async function ConvertToBlob(files) {
    const promises = files.map(file => {
        return new Promise((resolve, reject) => {
            fs.readFile(file.path, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ file, data, });
                }
            });
        });
    });

    const fileData = await Promise.all(promises);
    return fileData;
}

export async function GetFileType(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getFileType/${req.params.loan_type}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]');
            console.log('Code:', error.code);
            console.log('Message:', error.message);
            console.log('Status:', error.status);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                Code: error.code,
                Message: error.message,
                Status: error.status
            })
        });
}

export async function GetFileList(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getFileList/${req.params.LAI}/${req.params.PRID}/${req.params.USRID}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]');
            console.log('Code:', error.code);
            console.log('Message:', error.message);
            console.log('Status:', error.status);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                Code: error.code,
                Message: error.message,
                Status: error.status
            })
        });
}

export async function UploadFileReq(req, res) {
    const { API } = process.env;

    const formData = new FormData();
    const FileContainer = await ConvertToBlob(req.files);
    formData.append('client', req.body.client)
    formData.append('docsID_list', req.body.docsID_list)
    formData.append('status_list', req.body.status_list)
    formData.append('remarks_list', req.body.remarks_list)
    formData.append('docStatus_list', req.body.docStatus_list)
    formData.append('prid', req.body.prid)
    formData.append('Uploader', req.body.Uploader)

    FileContainer.map(async (x) => {
        const FileHolder = new File([x.data], { type: x.file.mimetype });
        formData.append('files', FileHolder, x.file.originalname)
    })

    await axios.post(`${API}/uploadFileReq`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log(error)
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('Code:', error.code);
            console.log('Message:', error.message);
            console.log('Status:', error.status);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                Code: error.code,
                Message: error.message,
                Status: error.status
            })
        })
}

export async function UploadFileFin(req, res) {
    const { API } = process.env;

    const formData = new FormData();
    const FileContainer = await ConvertToBlob(req.files);
    formData.append('client', req.body.client)
    formData.append('docsID_list', req.body.docsID_list)
    formData.append('dfn_list', req.body.dfn_list)
    formData.append('remarks_list', req.body.remarks_list)
    formData.append('docStatus_list', req.body.docStatus_list)
    formData.append('prid', 'IC')
    formData.append('Uploader', req.body.Uploader)

    FileContainer.map(async (x) => {
        const FileHolder = new File([x.data], { type: x.file.mimetype });
        formData.append('files', FileHolder, x.file.originalname)
    })

    await axios.post(`${API}/uploadFileFin`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('Code:', error.code);
            console.log('Message:', error.message);
            console.log('Status:', error.status);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                Code: error.code,
                Message: error.message,
                Status: error.status
            })
        });
}

export async function UpdateFileStatus(req, res) {
    const { API } = process.env;

    await axios.post(`${API}/updateFileStatus`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('Code:', error.code);
            console.log('Message:', error.message);
            console.log('Status:', error.status);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                Code: error.code,
                Message: error.message,
                Status: error.status
            })
        });
}

