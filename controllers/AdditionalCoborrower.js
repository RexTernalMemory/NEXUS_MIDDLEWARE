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