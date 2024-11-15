import axios from "axios";

export async function GetEmploymentHistory(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getEmploymentHistory/${req.params.LAI}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]');
            console.log('FILE: EmploymentHistory');
            console.log('/getEmploymentHistory');
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

export async function EditEmploymentHistory(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/editEmploymentHistory`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: EmploymentHistory');
            console.log('/editEmploymentHistory');
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

export async function AddEmploymentHistory(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/addEmploymentHistory`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: EmploymentHistory');
            console.log('/addEmploymentHistory');
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

export async function EmploymentHistory(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/EmploymentHistory/${req.params.Id}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: EmploymentHistory');
            console.log('/EmploymentHistory');
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

export async function DeleteEmploymentHistory(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/DeleteEmploymentHistory/${req.params.Id}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: EmploymentHistory');
            console.log('/DeleteEmploymentHistory');
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