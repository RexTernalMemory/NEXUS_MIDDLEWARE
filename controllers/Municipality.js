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
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
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
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
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
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
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
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
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
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
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
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
}