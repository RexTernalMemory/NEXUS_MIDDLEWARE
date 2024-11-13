import express from 'express';
import { GetRelativesRelationship } from '../controllers/Relatives.js';
import { GetTrackLoan } from '../controllers/ApplicationData.js';
import { GetKaiser } from '../controllers/KaiserChecker.js';
import { GetMuniArea, GetProvince } from '../controllers/Barangay.js';

const route = express.Router();

route.get('/GroupGet/:CALL/:provinceCode?', (req, res) => {
    const { CALL,provinceCode } = req.params;
    const call = parseInt(CALL, 10);
    switch (call) {
        case 1:
            return GetRelativesRelationship(req, res);
        case 2:
            return GetTrackLoan(req, res);
        case 3:
            return GetProvince(req, res);
        case 4:
            if (!provinceCode) {
                return res.status(400).json({ error: "provinceCode is required for this endpoint" });
            }
            return GetMuniArea(req, res);
        default:
            res.status(404).json({ 
                error: "Error: 404, Invalid Parameter" 
            });
    }
});

export { route as GetRoutes };
