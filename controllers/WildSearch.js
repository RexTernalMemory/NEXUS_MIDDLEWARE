import axios from "axios";

export async function GetWildSearch(req, res){
    const { API } = process.env;
    await axios.get(`${API}/wild-search/${req.params.First}/${req.params.Second}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[GET REQUEST]');
            console.log('FILE: WildSearch');
            console.log('/wild-search');
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