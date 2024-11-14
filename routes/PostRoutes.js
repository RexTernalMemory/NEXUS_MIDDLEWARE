import express from 'express';


const route = express.Router();


function error_msg(res) {
    return res.status(400).json({ error: "Error: This API requires a parameter(s)." });
}

route.post('/GroupGet/:CALL/:First?/:Second?/:Third?/:Fourth?/:Fifth?', (req, res) => {
    const { CALL, First, Second, Third, Fourth, Fifth } = req.params;
    //const call = parseInt(CALL, 10);
    switch (CALL) {
        case '1':
            return GetAgency(req, res);
        case '2': 
            if (!First || !Second) return error_msg(res);
            return GetAppDataList(req, res);
        default:
            res.status(404).json({
                error: "Error: 404, Invalid: Api Call Doesn't Exist."
            });    }
});

export { route as PostRoutes };
