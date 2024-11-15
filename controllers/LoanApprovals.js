import axios from "axios";

export async function GetApproval(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getApproval/${req.params.First}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]', error);
            console.log('FILE: LoanApprovals');
            console.log('/getApproval');
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