import authenticateCompanyMiddleware from "./authenticateCompany"
import validateSchemaMiddleware from "./validateSchema"
import verifyCompanyExistenceMiddleware from "./verifyCompanyExistence"
import verifyDuplicateCnpjMiddleware from "./verifyDuplicateCnpj"
import verifyDuplicateVehiclePlateMiddleware from "./verifyDuplicateVehiclePlate"
import verifyVehicleExistenceMiddleware from "./verifyVehicleExistence"

export {
    authenticateCompanyMiddleware,
    validateSchemaMiddleware,
    verifyCompanyExistenceMiddleware,
    verifyDuplicateCnpjMiddleware,
    verifyVehicleExistenceMiddleware,
    verifyDuplicateVehiclePlateMiddleware
}