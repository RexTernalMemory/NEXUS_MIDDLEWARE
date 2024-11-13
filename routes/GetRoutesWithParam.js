import express from 'express';
import { GetRelativesRelationship } from '../controllers/Relatives.js';
import { GetTrackLoan } from '../controllers/ApplicationData.js';

const route = express.Router();

route.get('/GroupGetParam/:CALL', (req, res) => {
    const { CALL } = req.params;
    const call = parseInt(CALL, 10);
    switch (call) {
        case 1:
            return GetRelativesRelationship(req, res);
        case 2:
            return GetTrackLoan(req, res);
        case 3:
            return GetTrackLoan(req, res);
        case 4:
            return GetTrackLoan(req, res);
        default:
            res.status(404).json({ error: "Invalid call parameter. Use 1 for getBarangay." });
    }
});

export { route as GetRoutesWithParam };
