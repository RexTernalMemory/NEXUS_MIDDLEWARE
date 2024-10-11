import axios from "axios";

export async function GetRelativesRelationship(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getRelativesRelationship`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]', error);
            console.log('FILE: Relatives');
            console.log('/getRelativesRelationship');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
}

export async function GetRelativesSuffix(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getRelativesSuffix`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]', error);
            console.log('FILE: Relatives');
            console.log('/getRelativesSuffix');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
}

export async function GetRelatives(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getRelatives/${req.params.BorrowerId}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]', error);
            console.log('FILE: Relatives');
            console.log('/getRelatives');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
}

export async function AddRelatives(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/addRelatives`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]', error);
            console.log('FILE: Relatives');
            console.log('/addRelatives');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
}

export async function EditRelatives(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/editRelatives`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]', error);
            console.log('FILE: Relatives');
            console.log('/editRelatives');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
}

export async function Relativedelete(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/Relativedelete/${req.params.Code}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]', error);
            console.log('FILE: Relatives');
            console.log('/Relativedelete');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
}