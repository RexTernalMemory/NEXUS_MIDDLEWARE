import axios from "axios";

export async function DefaultAccessList(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/defaultAccessList`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]', error);
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
}

export async function CustomAccessList(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/customAccessList`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]', error);
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
}

export async function UpdateRole(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/updateRole`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]', error);
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
}