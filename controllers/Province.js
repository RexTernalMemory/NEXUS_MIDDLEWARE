import axios from "axios";

export async function GetProvinceselection(req, res) {
    const { API } = process.env;
    await axios.get(`${API}/getProvinceselection`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]', error);
            console.log('FILE: Province');
            console.log('/getProvinceselection');
            console.log('ERROR:', error);
            console.log('=========================================');
            console.log('                                         ');
            res.json(error)
        });
}