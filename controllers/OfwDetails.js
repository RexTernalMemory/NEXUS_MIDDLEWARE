import axios from "axios";

export async function GetListRelationship(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getListRelationship`)
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

export async function GetCountry(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/OFWDetails/getCountry`)
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

export async function GetIDtype(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/OFWDetails/getIDtype`)
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

export async function GetAgency(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/OFWDetails/GetAgency`)
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

export async function GetSuffix(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/OFWDetails/GetSuffix`)
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