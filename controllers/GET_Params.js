import axios from "axios";

export async function GetDataParams(req, res) {
    const { API } = process.env;
    let id = req.params.id
/*
    if (id === 'AY') {
        await axios.get(`${API}/getAgency`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getAgency');
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
    else */if (id === 'BY') {
        await axios.get(`${API}/getBarangay`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getBarangay');
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
    else if (id === 'PE') {
        await axios.get(`${API}/getProvince`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getProvince');
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
    else if (id === 'BL') {
        await axios.get(`${API}/getBranchList`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getBranchList');
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
    else if (id === 'BH') {
        await axios.get(`${API}/getBranch`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getBranch');
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
    else if (id === 'RP') {
        await axios.get(`${API}/getRelationship`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getRelationship');
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
    else if (id === 'IS') {
        await axios.get(`${API}/getInternationalSubGroup`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getInternationalSubGroup');
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
    else if (id === 'CL') {
        await axios.get(`${API}/getCountryList`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getCountryList');
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
    else if (id === 'CE') {
        await axios.get(`${API}/getCurrencyTable`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getCurrencyTable');
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
    else if (id === 'CT') {
        await axios.get(`${API}/getCurrenyList`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getCurrenyList');
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
    else if (id === 'LT') {
        await axios.get(`${API}/getListLoanProduct`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getListLoanProduct');
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
    else if (id === 'LP') {
        await axios.get(`${API}/getLoanPurpose`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getLoanPurpose');
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
    else if (id === 'LC') {
        await axios.get(`${API}/getLoanConsultant`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getLoanConsultant');
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
    else if (id === 'MA') {
        await axios.get(`${API}/getMunicipalityArea`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getMunicipalityArea');
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
    else if (id === 'PT') {
        await axios.get(`${API}/getProvinceList`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getProvinceList');
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
    else if (id === 'LR') {
        await axios.get(`${API}/getListRelationship`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getListRelationship');
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
    else if (id === 'OCY') {
        await axios.get(`${API}/OFWDetails/getCountry`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/OFWDetails/getCountry');
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
    else if (id === 'OGI') {
        await axios.get(`${API}/OFWDetails/getIDtype`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/OFWDetails/getIDtype');
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
    else if (id === 'OGA') {
        await axios.get(`${API}/OFWDetails/GetAgency`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/OFWDetails/GetAgency');
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
    else if (id === 'OGS') {
        await axios.get(`${API}/OFWDetails/GetSuffix`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/OFWDetails/GetSuffix');
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
    else if (id === 'OCA') {
        await axios.get(`${API}/OFWDetails/getCollectionArea`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/OFWDetails/getCollectionArea');
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
    else if (id === 'OJC') {
        await axios.get(`${API}/OFWDetails/getJobCategory`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/OFWDetails/getJobCategory');
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
    else if (id === 'PS') {
        await axios.get(`${API}/getProvinceselection`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getProvinceselection');
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
    else if (id === 'RR') {
        await axios.get(`${API}/getRelativesRelationship`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getRelativesRelationship');
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
    else {
        await axios.get(`${API}/getRelativesSuffix`)
            .then((result) => {
                res.json(result.data)
            })
            .catch(error => {
                console.log('                                         ');
                console.log('=========================================');
                console.log('[GET REQUEST]');
                console.log('FILE: GETController');
                console.log('/getRelativesSuffix');
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
}