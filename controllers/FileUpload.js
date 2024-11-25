import axios from "axios";
import fs from 'fs'

async function ConvertToBlob(files) {
    const FileData = files.map(file => {
        return new Promise((res, rej) => {
            fs.readFile(file.path, (err, data) => {
                if (err) { rej(err); }
                else { res({ file, data, }) }
            })
        })
    })

    const Blob = await Promise.all(FileData);
    return Blob;
}

export async function GetFileType(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getFileType/${req.params.First}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]');
            console.log('FILE: FileUpload');
            console.log('/getFileType');
            console.log('Code:', error.code);
            console.log('Message:', error.message);
            console.log('Status:', error.status);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                status: error.status,
                message: error.message,
                description: error.description
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
            console.log('FILE: FileUpload');
            console.log('/getFileList');
            console.log('Code:', error.code);
            console.log('Message:', error.message);
            console.log('Status:', error.status);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                status: error.status,
                message: error.message,
                description: error.description
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
            console.log('FILE: FileUpload');
            console.log('/uploadFileReq');
            console.log('Code:', error.code);
            console.log('Message:', error.message);
            console.log('Status:', error.status);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                status: error.status,
                message: error.message,
                description: error.description
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
            console.log('FILE: FileUpload');
            console.log('/uploadFileFin');
            console.log('Code:', error.code);
            console.log('Message:', error.message);
            console.log('Status:', error.status);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                status: error.status,
                message: error.message,
                description: error.description
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
            console.log('FILE: FileUpload');
            console.log('/updateFileStatus');
            console.log('Code:', error.code);
            console.log('Message:', error.message);
            console.log('Status:', error.status);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                status: error.status,
                message: error.message,
                description: error.description
            })
        });
}

export async function UploadFileRel(req, res) {
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

    await axios.post(`${API}/uploadFileRel`, formData, {
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
            console.log('FILE: FileUpload');
            console.log('/uploadFileRel');
            console.log('Code:', error.code);
            console.log('Message:', error.message);
            console.log('Status:', error.status);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                status: error.status,
                message: error.message,
                description: error.description
            })
        });
}

