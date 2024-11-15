import axios from "axios";

export async function GetBranchList(res) {
    const {API} = process.env;
    await axios.get(`${API}/getBranchList`)
    .then((result) => {
        res.json(result.data)
    })
    .catch(error => {
        console.log('                                         ');
        console.log('=========================================');
        console.log('[GET REQUEST]', error);
        console.log('FILE: Branch');
        console.log('/getBranchList');
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

export async function GetBranch(res) {
    const {API} = process.env;
    await axios.get(`${API}/getBranch`)
    .then((result) => {
        res.json(result.data)
    })
    .catch(error => {
        console.log('                                         ');
        console.log('=========================================');
        console.log('[GET REQUEST]', error);
        console.log('FILE: Branch');
        console.log('/getBranch');
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

export async function AddBranch(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/addBranch`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]', error);
            console.log('FILE: Branch');
            console.log('/addBranch');
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

export async function UpdateBranch(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/updateBranch`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]', error);
            console.log('FILE: Branch');
            console.log('/updateBranch');
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

