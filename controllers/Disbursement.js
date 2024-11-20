import axios from "axios";

export async function GetDisbursementList(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getDisbursementList/${req.params.First}/${req.params.Second}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]');
            console.log('FILE: Disbursement');
            console.log('/getDisbursementList');
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

export async function CreateDisbursement(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/createDisbursement`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: Batch');
            console.log('/createDisbursement');
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

export async function UpdateDisbursement(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/updateDisbursement`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: Batch');
            console.log('/updateDisbursement');
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

export async function DeleteDisbursement(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/deleteDisbursement/${req.params.First}`,)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: Batch');
            console.log('/deleteDisbursement');
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

export async function UpdateStatDisbursement(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/updateStatDisbursement/${req.params.First}/${req.params.Second}/${req.params.Third}/${req.params.Fourth}`,)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: Batch');
            console.log('/updateStatDisbursement');
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

export async function UpdateFileNameBatch(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/updateFileNameBatch/${req.params.First}/${req.params.Second}`,)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: Batch');
            console.log('/updateFileNameBatch');
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