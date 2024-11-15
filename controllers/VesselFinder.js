import axios from "axios";

export async function Shipvessel_Details(req, res) {
    const { API } = process.env;
    await axios.post(`${API}/shipvessel_Details/${req.params.IMO}`)
        .then((result) => {
            res.json(result.data)
        })
        .catch(error => {
            console.log('                                         ');
            console.log('=========================================');
            console.log('[POST REQUEST]');
            console.log('FILE: VesselFinder');
            console.log('/shipvessel_Details');
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