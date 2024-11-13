import axios from "axios";

export async function GetListLoanProduct(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getListLoanProduct`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]', error);
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
}

export async function GetLoanPurpose(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getLoanPurpose`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]', error);
            console.log('FILE: LoanDetails');
            console.log('/getLoanPurpose');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
}

export async function GetLoanConsultant(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getLoanConsultant`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]', error);
            console.log('FILE: LoanDetails');
            console.log('/getLoanConsultant');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
}