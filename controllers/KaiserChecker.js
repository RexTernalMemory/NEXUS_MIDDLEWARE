import axios from "axios";

export async function UpdateKaiser(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/updateKaiser`, req.body)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]', error);
            console.log('FILE: KaiserChecker');
            console.log('/updateKaiser');
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

export async function GetKaiser(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getKaiser/${req.params.First}/${req.params.Second}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]', error);
            console.log('FILE: KaiserChecker');
            console.log('/getKaiser');
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