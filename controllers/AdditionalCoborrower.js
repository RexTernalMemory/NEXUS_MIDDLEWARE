import axios from "axios";

export async function AddAdditionalCoborrower(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/addAdditionalCoborrower`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: AdditionalCoborrower');
            console.log('/addAdditionalCoborrower');
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

export async function AdditionalCoborrowerdelete(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/AdditionalCoborrowerdelete/${req.params.LID}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: AdditionalCoborrower');
            console.log('/AdditionalCoborrowerdelete');
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