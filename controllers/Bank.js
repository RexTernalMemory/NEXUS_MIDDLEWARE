import axios from "axios";

export async function GetPurposeList(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getPurposeList`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]');
            console.log('FILE: Bank');
            console.log('/getPurposeList');
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

export async function GetPaymentList(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getPaymentList`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]');
            console.log('FILE: Bank');
            console.log('/getPaymentList');
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