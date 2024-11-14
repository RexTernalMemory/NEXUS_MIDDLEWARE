import express from 'express';
import { GetAppDataList, GetClientDataList, GetDuplicateLoans } from '../controllers/ApplicationData.js';
import { GetBarangay, GetBarangayList, GetMuniArea, GetProvince } from '../controllers/Barangay.js';
import { GetAgency } from '../controllers/Agency.js';
import { GetOtherLoanHistory } from '../controllers/BorrowersLoanHistory.js';
import { GetBranch, GetBranchList } from '../controllers/Branch.js';
import { GetCharacterRef, GetRelationship } from '../controllers/CharacterReference.js';
import { GetCountryList, GetInternationalSubGroup } from '../controllers/Country.js';
import { GetFileType } from '../controllers/FileUpload.js';
import { GetKaiser } from '../controllers/KaiserChecker.js';
import { GetListLoanProduct, GetLoanConsultant, GetLoanPurpose } from '../controllers/LoanDetails.js';
import { GetNDI } from '../controllers/NDI.js';
import { GetCollectionArea, GetCountry, GetIDtype, GetJobCategory, GetListRelationship, GetPosition, GetSuffix } from '../controllers/OfwDetails.js';
import { GetProvinceselection } from '../controllers/Province.js';
import { GetRelatives, GetRelativesSuffix } from '../controllers/Relatives.js';
import { GetRemarks, GetStatusList } from '../controllers/StatusRemarks.js';
import { GetBrachNameList, GetDepartmentList, GetRoleList, GetUserInfo, GetUsers } from '../controllers/UserAccounts.js';

const route = express.Router();

function error_msg(res) {
    return res.status(400).json({ error: "Error: This API requires a parameter(s)." });
}

route.get('/GroupGet/:CALL/:First?/:Second?/:Third?/:Fourth?/:Fifth?', (req, res) => {
    const { CALL, First, Second, Third, Fourth, Fifth } = req.params;
    //const call = parseInt(CALL, 10);
    switch (CALL) {
        case 'G1A':
            return GetAgency(req, res);
        case 'G2AD': //${req.params.USID}/${req.params.TILE}
            if (!First || !Second) return error_msg(res);
            return GetAppDataList(req, res);
        case 'G3CD': //${req.params.LAI}
            if (!First) return error_msg(res);
            return GetClientDataList(req, res);
        case 'G4DL': //${req.params.FN}/${req.params.LN}/${req.params.LAI}
            if (!First || !Second || !Third) return error_msg(res);
            return GetDuplicateLoans(req, res);
        case 'G5B':
            return GetBarangay(req, res);
        case 'G6MA': //${req.params.PROV}
            if (!First) return error_msg(res);
            return GetMuniArea(req, res);
        case 'G7BL': //${req.params.MuniCode}
            if (!First) return error_msg(res);
            return GetBarangayList(req, res);
        case 'G8P': //${req.params.MuniCode}
            if (!First) return error_msg(res);
            return GetProvince(req, res);
        case 'G9OLH': //${req.params.LAI}
            if (!First) return error_msg(res);
            return GetOtherLoanHistory(req, res);
        case 'G10BL':
            return GetBranchList(res);//no req
        case 'G11B':
            return GetBranch(res);
        case 'G12R':
            return GetRelationship(req, res);
        case 'G13CR': //${req.params.CI}
            if (!First) return error_msg(res);
            return GetCharacterRef(req, res);
        case 'G14ISG':
            return GetInternationalSubGroup(req, res);
        case 'G15CL':
            return GetCountryList(req, res);
        case 'G16FT': //${req.params.loan_type}
            if (!First) return error_msg(res);
            return GetFileType(req, res);
        case 'G17FL': //${req.params.loan_type}
            return GetFileType(req, res);
        case 'G18K':
            return GetKaiser(req, res);
        case 'G19LLP':
            return GetListLoanProduct(req, res);
        case 'G20LP':
            return GetLoanPurpose(req, res);
        case 'G21LC':
            return GetLoanConsultant(req, res);
        /* case 'G22MA':
             return GetMuniArea(req, res);
         case 'G23PL':
             return GetProvince(req, res);*/
        case 'G24N':
            if (!First) return error_msg(res);
            return GetNDI(req, res);
        case 'G25LR':
            return GetRelationship(req, res);
        case 'G26C':
            return GetCountry(req, res);
        case 'G27IT':
            return GetIDtype(req, res);
        case 'G28S':
            return GetSuffix(req, res);
        case 'G29CA':
            return GetCollectionArea(req, res);
        case 'G30JC':
            return GetJobCategory(req, res);
        case 'G31P':
            if (!First) return error_msg(res);
            return GetPosition(req, res);
        case 'G32PS':
            return GetProvinceselection(req, res);
        case 'G33RR':
            return GetListRelationship(req, res);
        case 'G34RS':
            return GetRelativesSuffix(req, res);
        case 'G35R':
            return GetRelatives(req, res);
        case 'G36SL':
            if (!First || !Second) return error_msg(res);
            return GetStatusList(req, res);
        case 'G37R':
            if (!First) return error_msg(res);
            return GetRemarks(req, res);
        case 'G38U':
            return GetUsers(req, res);
        case 'G39UI':
            if (!First) return error_msg(res);
            return GetUserInfo(req, res);
        case 'G40BL':
            return GetBrachNameList(req, res);
        case 'G41DL':
            return GetDepartmentList(req, res);
        case 'G42RL'://
            if (!First) return error_msg(res);
            return GetRoleList(req, res);
        default:
            res.status(404).json({
                error: "Error: 404, Invalid: Api Call Doesn't Exist."
            });
    }
});

export { route as GetRoutes };
