import axios from "axios";

export async function GetKaiser(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/getKaiser/${req.params.fullname}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]', error);
            console.log('FILE: KaiserChecker');
            console.log('/getKaiser');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
}