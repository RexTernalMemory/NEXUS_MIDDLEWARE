import axios from "axios";

export async function GetOtherLoanHistory(req, res) {
    const {API} = process.env;
    await axios.get(`${API}/getOtherLoanHistory/${req.params.LAI}`)
    .then((result) => {
        res.json(result.data)
    })
    .catch(error => {
        console.log('                                         ');
        console.log('=========================================');
        console.log('[GET REQUEST]', error);
        console.log('FILE: BorrowersLoanHistory');
        console.log('/getOtherLoanHistory');
        console.log('ERROR:', error);
        console.log('=========================================');
        console.log('                                         ');
        res.json(error)
    });
}

export async function AddLoanHistory(req, res) {
    const{API} = process.env;
    await axios.post(`${API}/addLoanHistory`, req.body)
    .then((result) => {
        res.json(result.data)
    })
    .catch(error => {
        console.log('                                         ');
        console.log('=========================================');
        console.log('[POST REQUEST]', error);
        console.log('FILE: BorrowersLoanHistory');
        console.log('/addLoanHistory');
        console.log('ERROR:', error);
        console.log('=========================================');
        console.log('                                         ');
        res.json(error)
    });
}

export async function EditOtherLoanHistory(req, res) {
    const {API} =process.env;
    await axios.post(`${API}/editOtherLoanHistory`, req.body)
    .then((result) => {
        res.json(result.data)
    })
    .catch(error => {
        console.log('                                         ');
        console.log('=========================================');
        console.log('[POST REQUEST]', error);
        console.log('FILE: BorrowersLoanHistory');
        console.log('/editOtherLoanHistory');
        console.log('ERROR:', error);
        console.log('=========================================');
        console.log('                                         ');
        res.json(error)
    });
}

export async function DeleteOtherLoanHistory(req, res) {
    const {API} = process.env;
    await axios.post(`${API}/DeleteOtherLoanHistory/${req.params.Id}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]', error);
            console.log('FILE: BorrowersLoanHistory');
            console.log('/DeleteOtherLoanHistory');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
    
}