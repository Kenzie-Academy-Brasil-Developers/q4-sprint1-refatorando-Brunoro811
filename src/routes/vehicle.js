import { Router } from "express";

const route = Router();

import { 
    registerVehicleController,
    getVehicleController,
    deleteVehicleController,
    updateVehicleController
} from "../controllers/vechicle"

import {
    authenticateCompanyMiddleware,
    verifyCompanyExistenceMiddleware,
    verifyDuplicateVehiclePlateMiddleware,
    verifyVehicleExistenceMiddleware
} from "../middlewares"


const vehicleRoutes = (app) =>{

    route.post("/:cnpj/vehicles",
        authenticateCompanyMiddleware,
        verifyCompanyExistenceMiddleware,
        verifyDuplicateVehiclePlateMiddleware,
        registerVehicleController 
    )

    route.get("/:cnpj/vehicles", 
        authenticateCompanyMiddleware,
        verifyCompanyExistenceMiddleware,
        getVehicleController
    )
 
    route.put("/:cnpj/vehicles/:plate",
        authenticateCompanyMiddleware,
        verifyCompanyExistenceMiddleware,
        verifyVehicleExistenceMiddleware,
        updateVehicleController
    )

    route.delete("/:cnpj/vehicles/:plate",
        authenticateCompanyMiddleware,
        verifyCompanyExistenceMiddleware,
        verifyVehicleExistenceMiddleware,
        deleteVehicleController

    )

    app.use("/companies",route)
}
export default vehicleRoutes;