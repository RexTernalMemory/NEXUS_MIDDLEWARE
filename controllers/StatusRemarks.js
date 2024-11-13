import axios from "axios";

export async function GetStatusList(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getStatusList/${req.params.USID}/${req.params.LAI}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]');
            console.log('FILE: StatusRemarks');
            console.log('/getStatusList');
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

export async function GetRemarks(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getRemarks/${req.params.LAI}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]');
            console.log('FILE: StatusRemarks');
            console.log('/getRemarks');
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

export async function UpdateApplicationStatus(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/updateApplicationStatus`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: StatusRemarks');
            console.log('/updateApplicationStatus');
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

export async function UpdateLackOfDocs(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/UpdateLackOfDocs/${req.params.LAI}/${req.params.USER}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: StatusRemarks');
            console.log('/UpdateLackOfDocs');
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