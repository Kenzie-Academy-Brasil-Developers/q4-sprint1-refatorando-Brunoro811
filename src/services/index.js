import registerCompanyService from "./company/registerCompanyService";
import loginCompanyService from "./company/loginCompanyService";
import deleteCompanyService from "./company/deleteCompanyServices";
import updateCompanyService from "./company/updateCompanyService";

import registerVehicleService from "./vehicle/registerVehicleService";
import deleteVehicleService from "./vehicle/deleteVehicleService";
import updateVehicleService from "./vehicle/updateVehicleService";
import secureReturn from "./secureReturn";

export {
    registerCompanyService,
    loginCompanyService,
    deleteCompanyService,
    updateCompanyService,

    registerVehicleService,
    deleteVehicleService,
    updateVehicleService,
    secureReturn
};