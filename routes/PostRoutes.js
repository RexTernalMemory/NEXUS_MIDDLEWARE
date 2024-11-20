import express from 'express';
import { AddAgency, EditAgency } from '../controllers/Agency.js';
import { CheckLoan, GetTrackLoan } from '../controllers/ApplicationData.js';
import { UpdateAppDetails, UpdateAppLCDetails, UpdateDetails } from '../controllers/ApplicationUpdate.js';
import { AddDirectClient, AddLCClient } from '../controllers/ApplyLoan.js';
import { AddBarangay, EditBarangay, GetBarangayList } from '../controllers/Barangay.js';
import { AddLoanHistory, DeleteOtherLoanHistory, EditOtherLoanHistory } from '../controllers/BorrowersLoanHistory.js';
import { AddBranch, UpdateBranch } from '../controllers/Branch.js';
import { AddCharacterRef, DeleteCharacterRef, EditCharacterRef } from '../controllers/CharacterReference.js';
import { AddCountry, EditCountry, GetInternationalGroup } from '../controllers/Country.js';
import { UpdateFileStatus, UploadFileFin, UploadFileReq } from '../controllers/FileUpload.js';
import { GetKaiser } from '../controllers/KaiserChecker.js';
import { AddMunicipality, EditMunicipality, GetMunicipalityList } from '../controllers/Municipality.js';
import { AddNDISelection, DeleteNDI, UpdateNDI } from '../controllers/NDI.js';
import { AddRelatives, EditRelatives, Relativedelete } from '../controllers/Relatives.js';
import { CustomAccessList, DefaultAccessList, UpdateRole } from '../controllers/RoleAccess.js';
import { UpdateApplicationStatus, UpdateCheckListForApproval, UpdateDepartDate, UpdateLackOfDocs, GetPNNumber } from '../controllers/StatusRemarks.js';
import { CancelOTP, CheckPassword, CraAssign, ForgotPassword, Login, PasswordAttempt, Register, ResendOTP, ReseterPassword, ResetPassword, SavePassword, UnlockAccount, UpdateUser, ValidateURL, VerifiedAccount, VerifyOtp } from '../controllers/UserAccounts.js';
import { AdditionalDisbursement, CreateBatchList, RemoveFromBatchList, SetBatchList, UpdateBatchDetails } from '../controllers/Batch.js';
import { AddCurrency, DelCurrency, EditCurrency } from '../controllers/Currency.js';
import { CreateDisbursement, DeleteDisbursement, UpdateDisbursement, UpdateFileNameBatch, UpdateStatDisbursement } from '../controllers/Disbursement.js';
import { AddEmploymentHistory, DeleteEmploymentHistory, EditEmploymentHistory, EmploymentHistory } from '../controllers/EmploymentHistory.js';
import { AddOwnAsset, DeleteOwnedAssets, EditOwnedAsset } from '../controllers/OwnedAssets.js';
import { AddOwnedProperties, DeleteOwnedProperties, EditOwnedProperties } from '../controllers/OwnedProperties.js';
import { VerifyUser } from '../controllers/Verify.js';
import { AddCharges } from '../controllers/Charges.js';
import { AddAdditionalCoborrower, AdditionalCoborrowerdelete } from '../controllers/AdditionalCoborrower.js';


const route = express.Router();


function error_msg(res) {
    return res.status(400).json({ error: "Error: This API requires a parameter(s)." });
}

route.post('/GroupPost/:CALL/:First?/:Second?/:Third?/:Fourth?/:Fifth?', (req, res) => {
    const { CALL, First, Second, Third, Fourth, Fifth } = req.params;
    switch (CALL) {
        case 'P43AACB'://
            return AddAdditionalCoborrower(req, res);
        case 'P43DACB'://
            if (!First) return error_msg(res);
            return AdditionalCoborrowerdelete(req, res);
        case 'P44AA'://
            return AddAgency(req, res);
        case 'P45UA'://
            return EditAgency(req, res);
        case 'P46TL'://
            return GetTrackLoan(req, res);
        case 'P47CL'://
            return CheckLoan(req, res);
        case 'P48UD'://
            return UpdateDetails(req, res);

        case 'P49ULCD':// NOT FOUND
            return UpdateAppLCDetails(req, res);
        case 'P50UAD':// NOT FOUND
            return UpdateAppDetails(req, res);

        case 'P51ALCC'://
            return AddLCClient(req, res);
        case 'P52ADC'://
            return AddDirectClient(req, res);
        case 'P53AB'://
            return AddBarangay(req, res);
        case 'P54UB'://
            return EditBarangay(req, res);
        case 'P55ALH'://
            return AddLoanHistory(req, res);
        case 'P56UOLH'://
            return EditOtherLoanHistory(req, res);
        case 'P57DOLH'://
            if (!First) return error_msg(res);
            return DeleteOtherLoanHistory(req, res);
        case 'P58AB'://
            return AddBranch(req, res);
        case 'P59UB'://
            return UpdateBranch(req, res);
        case 'P60ACR'://
            return AddCharacterRef(req, res);
        case 'P61UCR'://
            return EditCharacterRef(req, res);
        case 'P62DCR'://
            if (!First) return error_msg(res);
            return DeleteCharacterRef(req, res);
        case 'P63GIG'://
            return GetInternationalGroup(req, res);
        case 'P64AC'://
            return AddCountry(req, res);
        case 'P65UC'://
            return EditCountry(req, res);

        // UPLOADING FILES
        case 'P66UFR'://
            return UploadFileReq(req, res);
        case 'P67UFF'://
            return UploadFileFin(req, res);
        case 'P68FS'://
            return UpdateFileStatus(req, res);
        // UPLOADING FILES

        case 'P69GK':// NOT FOUND
            return GetKaiser(req, res);
        case 'P70GML':// NOT FOUND
            return GetMunicipalityList(req, res);
        case 'P72AM'://
            return AddMunicipality(req, res);
        case 'P73UM'://
            return EditMunicipality(req, res);
        case 'P74ANS'://
            if (!First || !Second || !Third) return error_msg(res);
            return AddNDISelection(req, res);
        case 'P75AR'://
            return AddRelatives(req, res);
        case 'P76UR'://
            return EditRelatives(req, res);
        case 'P77DR'://
            if (!First) return error_msg(res);
            return Relativedelete(req, res);
        case 'P78GDAL'://
            return DefaultAccessList(req, res);
        case 'P79GCAL'://
            return CustomAccessList(req, res);
        case 'P80UR'://
            return UpdateRole(req, res);
        case 'P81UAS'://
            return UpdateApplicationStatus(req, res);
        case 'P82ULD'://
            if (!First || !Second) return error_msg(res);
            return UpdateLackOfDocs(req, res);
        case 'P83R'://
            return Register(req, res);
        case 'P84UU'://
            return UpdateUser(req, res);
        case 'P85L'://
            return Login(req, res);
        case 'P86PA'://
            return PasswordAttempt(req, res);
        case 'P87VA'://
            return VerifiedAccount(req, res);
        case 'P88RO'://
            if (!First) return error_msg(res);
            return ResendOTP(req, res);
        case 'P89CO'://
            if (!First) return error_msg(res);
            return CancelOTP(req, res);
        case 'P90VO'://
            return VerifyOtp(req, res);
        case 'P91FP'://
            if (!First) return error_msg(res);
            return ForgotPassword(req, res);
        case 'P92UA'://
            if (!First) return error_msg(res);
            return UnlockAccount(req, res);
        case 'P93VU'://
            if (!First) return error_msg(res);
            return ValidateURL(req, res);
        case 'P94CP'://
            if (!First) return error_msg(res);
            return CheckPassword(req, res);
        case 'P95URP'://
            return ResetPassword(req, res);
        case 'P96SP'://
            return SavePassword(req, res);
        case 'P97RP'://
            return ReseterPassword(req, res);
        //Update 11/15/2024
        case 'P115ABL'://
            return CreateBatchList(req, res);
        case 'P116UBD'://
            if (!First || !Second || !Third) return error_msg(res);
            return SetBatchList(req, res);
        case 'P144DBL'://
            return RemoveFromBatchList(req, res);
        case 'P117UBD':// NOT FOUND
            return UpdateBatchDetails(req, res);
        case 'P118GAD'://
            return AdditionalDisbursement(req, res);
        case 'P119DC'://
            if (!First) return error_msg(res);
            return DelCurrency(req, res);
        case 'P120AC'://
            return AddCurrency(req, res);
        case 'P121UC'://
            return EditCurrency(req, res);
        case 'P122AD'://
            return CreateDisbursement(req, res);
        case 'P123UD'://
            return UpdateDisbursement(req, res);
        case 'P124DD'://
            if (!First) return error_msg(res);
            return DeleteDisbursement(req, res);
        case 'P125USD'://
            if (!First || !Second || !Third || !Fourth) return error_msg(res);
            return UpdateStatDisbursement(req, res);
        case 'P126UFB'://
            if (!First || !Second) return error_msg(res);
            return UpdateFileNameBatch(req, res);
        case 'P127UEH'://
            return EditEmploymentHistory(req, res);
        case 'P128AEH'://
            return AddEmploymentHistory(req, res);
        case 'P129GEH': // NOT FOUND
            if (!First) return error_msg(res);
            return EmploymentHistory(req, res);
        case 'P130DEH'://
            if (!First) return error_msg(res);
            return DeleteEmploymentHistory(req, res);
        case 'P131UN'://
            return UpdateNDI(req, res);
        case 'P132DN'://
            return DeleteNDI(req, res);
        case 'P133AOA'://
            return AddOwnAsset(req, res);
        case 'P134UOA'://
            return EditOwnedAsset(req, res);
        case 'P135DOA'://
            if (!First) return error_msg(res);
            return DeleteOwnedAssets(req, res);
        case 'P136AOP'://
            return AddOwnedProperties(req, res);
        case 'P137UOP'://
            return EditOwnedProperties(req, res);
        case 'P138DOP'://
            if (!First) return error_msg(res);
            return DeleteOwnedProperties(req, res);
        case 'P139UCA'://
            return UpdateCheckListForApproval(req, res);
        case 'P140UD'://
            return UpdateDepartDate(req, res);
        case 'P141UCA'://
            return CraAssign(req, res);
        case 'P142GVU': //NOT FOUND
            if (!First) return error_msg(res);
            return VerifyUser(req, res);
        case 'P143AC': //NOT FOUND
            return AddCharges(req, res);
        case 'P141UD': 
            return GetPNNumber(req, res);
        default:
            res.status(404).json({
                error: "Error: 404, Invalid: Api Call Doesn't Exist."
            });
    }
});

export { route as PostRoutes };
