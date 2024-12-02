import express from 'express';
import { GetAppDataList, GetApprovedDataList, GetClientDataList, GetDuplicateLoans, TileCount } from '../controllers/ApplicationData.js';
import { GetBarangay, GetBarangayList, GetMuniArea, GetProvince } from '../controllers/Barangay.js';
import { GetAgency } from '../controllers/Agency.js';
import { GetOtherLoanHistory } from '../controllers/BorrowersLoanHistory.js';
import { GetBranch, GetBranchList } from '../controllers/Branch.js';
import { GetCharacterRef, GetRelationship } from '../controllers/CharacterReference.js';
import { GetCountryList, GetInternationalSubGroup } from '../controllers/Country.js';
import { GetFileType,GetFileList } from '../controllers/FileUpload.js';
import { GetKaiser } from '../controllers/KaiserChecker.js';
import { GetListLoanProduct, GetLoanConsultant, GetLoanPurpose } from '../controllers/LoanDetails.js';
import { GetNDI, GetNDIData } from '../controllers/NDI.js';
import { GetCollectionArea, GetCountry, GetIDtype, GetJobCategory, GetListRelationship, GetPosition, GetSuffix } from '../controllers/OfwDetails.js';
import { GetProvinceselection } from '../controllers/Province.js';
import { GetRelatives, GetRelativesRelationship, GetRelativesSuffix } from '../controllers/Relatives.js';
import { GetRemarks, GetStatusList } from '../controllers/StatusRemarks.js';
import { CraList, GetBrachNameList, GetDepartmentList, GetRoleList, GetUserInfo, GetUsers, ListOfAccount } from '../controllers/UserAccounts.js';
import { GetPaymentType, GetPurposeList } from '../controllers/Bank.js';
import { AvailableList, GetBatchedDisbursement, GetBatchList } from '../controllers/Batch.js';
import { GetCurrencyList, GetCurrencyTable } from '../controllers/Currency.js';
import { GetDisbursementList } from '../controllers/Disbursement.js';
import { GetEmploymentHistory } from '../controllers/EmploymentHistory.js';
import { GetApproval } from '../controllers/LoanApprovals.js';
import { GetMunicipalityArea, GetProvinceList } from '../controllers/Municipality.js';
import { GetOwnedAssets } from '../controllers/OwnedAssets.js';
import { GetOwnedProperties } from '../controllers/OwnedProperties.js';
import { Shipvessel_Details } from '../controllers/VesselFinder.js';
import { GetChargerLPA } from '../controllers/Charges.js';
import { GetWildSearch } from '../controllers/WildSearch.js';

const route = express.Router();

function error_msg(res) {
    return res.status(400).json({ error: "Error: This API requires a parameter(s)." });
}

route.get('/GET/:CALL/:First?/:Second?/:Third?/:Fourth?/:Fifth?', (req, res) => {
    const { CALL, First, Second, Third, Fourth, Fifth } = req.params;
    switch (CALL) {
        case 'G1A'://
            return GetAgency(req, res);
        case 'G2AD'://
            if (!First || !Second) return error_msg(res);
            return GetAppDataList(req, res);
        case 'G3CD'://
            if (!First) return error_msg(res);
            return GetClientDataList(req, res);
        case 'G4DL'://
            if (!First || !Second || !Third) return error_msg(res);
            return GetDuplicateLoans(req, res);
        case 'G5B'://
            return GetBarangay(req, res);
        case 'G6MA'://
            if (!First) return error_msg(res);
            return GetMuniArea(req, res);
        case 'G7BL'://
            if (!First) return error_msg(res);
            return GetBarangayList(req, res);
        case 'G8P'://
            return GetProvince(req, res);
        case 'G9OLH'://
            if (!First) return error_msg(res);
            return GetOtherLoanHistory(req, res);
        case 'G10BL'://
            return GetBranchList(res);//no req
        case 'G11B'://
            return GetBranch(res);//no req
        case 'G12R'://
            return GetRelationship(req, res);
        case 'G13CR'://
            if (!First) return error_msg(res);
            return GetCharacterRef(req, res);
        case 'G14ISG'://
            return GetInternationalSubGroup(req, res);
        case 'G15CL'://
            return GetCountryList(req, res);

        // UPLOADING FILES
        case 'G16FT': //${req.params.loan_type}
            if (!First) return error_msg(res);
            return GetFileType(req, res);//
        case 'G17FL': //${req.params.loan_type}
            return GetFileList(req, res);//
        // UPLOADING FILES

        case 'G18K'://
            return GetKaiser(req, res);
        case 'G19LLP'://
            return GetListLoanProduct(req, res);
        case 'G20LP'://
            return GetLoanPurpose(req, res);
        case 'G21LC'://
            return GetLoanConsultant(req, res);

        case 'G6MA': //DUPLICATE
            if (!First) return error_msg(res);
            return GetMuniArea(req, res);

        case 'G23PL': //DUPLICATE
            return GetProvince(req, res);

        case 'G24N'://
            if (!First) return error_msg(res);
            return GetNDI(req, res);

        case 'G25LR': //DUPLICATE
            return GetRelationship(req, res);

        case 'G26C'://
            return GetCountry(req, res);
        case 'G27IT'://
            return GetIDtype(req, res);
        case 'G28S'://
            return GetSuffix(req, res);
        case 'G29CA':
            return GetCollectionArea(req, res);
        /* NOT FOUND
                case 'G30JC'://Not yet implemented GetCollectionArea
                    return GetJobCategory(req, res);
                case 'G31P': //Not yet implemented GetCollectionArea
                    if (!First) return error_msg(res);
                    return GetPosition(req, res);
        */
        case 'G32PS': //NOT FOUND
            return GetProvinceselection(req, res);
        case 'G33RR'://
            return GetListRelationship(req, res);
        /*    case 'G34RS':    //Missing in BackEnd
                return GetRelativesSuffix(req, res); */
        case 'G35R'://
            if (!First || !Second) return error_msg(res);
            return GetRelatives(req, res);
        case 'G36SL'://
            if (!First || !Second) return error_msg(res);
            return GetStatusList(req, res);
        case 'G37R'://
            if (!First) return error_msg(res);
            return GetRemarks(req, res);
        case 'G38U'://
            return GetUsers(req, res);
        case 'G39UI': //Warning Error in BackEnd
            if (!First) return error_msg(res);
            return GetUserInfo(req, res);
        case 'G40BL'://
            return GetBrachNameList(req, res);

        case 'G41DL': // NOT FOUND
            return GetDepartmentList(req, res);

        case 'G42RL'://
            if (!First) return error_msg(res);
            return GetRoleList(req, res);
        //Update 11/15/2024
        case 'G98TC'://
            return TileCount(req, res);
        case 'G99PL'://
            return GetPurposeList(req, res);
        case 'G100PT'://
            return GetPaymentType(req, res);
        case 'G101BL'://
            if (!First || !Second) return error_msg(res);
            return GetBatchList(req, res);
        case 'G102AL'://
            return AvailableList(req, res);
        case 'G103BD'://
            if (!First) return error_msg(res);
            return GetBatchedDisbursement(req, res);
        case 'G104CT'://
            return GetCurrencyTable(req, res);
        case 'G105CL'://
            return GetCurrencyList(req, res);
        case 'G106DL'://
            if (!First || !Second) return error_msg(res);
            return GetDisbursementList(req, res);
        case 'G107EH'://
            if (!First) return error_msg(res);
            return GetEmploymentHistory(req, res);
        case 'G108A'://
            if (!First) return error_msg(res);
            return GetApproval(req, res);
        case 'G22MA'://
            return GetMunicipalityArea(req, res);
        case 'G23PL'://
            return GetProvinceList(req, res);
        case 'G109ND'://
            if (!First || !Second || !Third || !Fourth || !Fifth) return error_msg(res);
            return GetNDIData(req, res);
        case 'G110OA'://
            if (!First) return error_msg(res);
            return GetOwnedAssets(req, res);
        case 'G111OP'://
            if (!First) return error_msg(res);
            return GetOwnedProperties(req, res);
        case 'G33RR'://
            return GetRelativesRelationship(req, res);
        case 'G112CL'://
            return CraList(req, res);
        case 'G113SVD'://
            if (!First) return error_msg(res);
            return Shipvessel_Details(req, res);
        case 'G114CL'://
            if (!First) return error_msg(res);
            return GetChargerLPA(req, res);

        case 'G145LA': //NOT FOUND
            return ListOfAccount(req, res);
        case 'G146WS':
            if (!First || !Second) return error_msg(res);
            return GetWildSearch(req, res)
        case 'G148GK':
            if(!First || !Second) return error_msg(res);
            return GetKaiser(req, res);
        case 'G149GA':
            if(!First || !Second) return error_msg(res);
            return GetApprovedDataList(req, res);
        default:
            res.status(404).json({
                error: "Error: 404, Invalid: Api Call Doesn't Exist."
            });
    }
});

export { route as GetRoutes };
