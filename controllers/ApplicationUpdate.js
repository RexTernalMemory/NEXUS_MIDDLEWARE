import axios from "axios";

export async function UpdateDetails(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/updateDetails`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log(error.response.data)
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: ApplicationUpdate');
            console.log('/updateDetails');
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

export async function UpdateAppLCDetails(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/updateAppLCDetails`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: ApplicationUpdate');
            console.log('/updateAppLCDetails');
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

export async function UpdateAppDetails(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/updateAppDetails`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: ApplicationUpdate');
            console.log('/updateAppDetails');
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