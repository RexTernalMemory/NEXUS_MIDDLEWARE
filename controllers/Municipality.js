import axios from "axios";

export async function GetMunicipalityArea(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getMunicipalityArea`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]', error);
            console.log('FILE: Municipality');
            console.log('/getMunicipalityArea');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                status: error.status,
                message: error.message,
                description: error.description
            })
        });
}

export async function GetProvinceList(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getProvinceList`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]', error);
            console.log('FILE: Municipality');
            console.log('/getProvinceList');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                status: error.status,
                message: error.message,
                description: error.description
            })
        });
}

export async function GetMunicipalityList(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/getMunicipalityList`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]', error);
            console.log('FILE: Municipality');
            console.log('/getMunicipalityList');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                status: error.status,
                message: error.message,
                description: error.description
            })
        });
}

export async function GetBarangayList(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/getBarangayList`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]', error);
            console.log('FILE: Municipality');
            console.log('/getBarangayList');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                status: error.status,
                message: error.message,
                description: error.description
            })
        });
}

export async function AddMunicipality(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/addMunicipality`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]', error);
            console.log('FILE: Municipality');
            console.log('/addMunicipality');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                status: error.status,
                message: error.message,
                description: error.description
            })
        });
}

export async function EditMunicipality(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/editMunicipality`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]', error);
            console.log('FILE: Municipality');
            console.log('/editMunicipality');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json({
                status: error.status,
                message: error.message,
                description: error.description
            })
        });
}