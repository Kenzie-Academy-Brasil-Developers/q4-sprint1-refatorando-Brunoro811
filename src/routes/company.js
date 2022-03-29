import { Router } from "express";

import {
    getAllController,
    registerController,
    loginController,
    deleteCompanyController,
    updateController
} from "../controllers/company"

import {
    authenticateCompanyMiddleware,
    validateSchemaMiddleware,
    verifyCompanyExistenceMiddleware,
    verifyDuplicateCnpjMiddleware,
    verifyVehicleExistenceMiddleware,
    verifyDuplicateVehiclePlateMiddleware
} from "../middlewares"

import {
    companySchema
} from "../shapes"

const route = Router();

const companyRoutes = (app) =>{
    route.post("/register", 
        validateSchemaMiddleware(companySchema),
        verifyDuplicateCnpjMiddleware,
        registerController,
    )
    route.post("/login", loginController )
    route.get("", getAllController )
    route.put("/:cnpj",
        authenticateCompanyMiddleware,
        verifyCompanyExistenceMiddleware,
        updateController
    ) 
    route.delete("/:cnpj",
        authenticateCompanyMiddleware,
        verifyCompanyExistenceMiddleware,
        deleteCompanyController 
    )
    
    app.use("/companies",route)
}
export default companyRoutes;


 