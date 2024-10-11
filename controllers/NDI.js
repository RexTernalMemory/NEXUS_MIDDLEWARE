import axios from "axios";

export async function GetNDI(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getNDI/${req.params.QTY}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]');
            console.log('FILE: NDI');
            console.log('/getNDI');
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

export async function AddNDISelection(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/addNDISelection/${req.params.QTY}/${raq.params.NAME}/${req.params.USR}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]', error);
            console.log('FILE: NDI');
            console.log('/addNDISelection');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
}