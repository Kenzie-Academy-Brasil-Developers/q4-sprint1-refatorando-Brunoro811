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

    route.post("/vehicles",
        authenticateCompanyMiddleware,
        verifyCompanyExistenceMiddleware,
        verifyDuplicateVehiclePlateMiddleware,
        registerVehicleController 
    )

    route.get("/vehicles", 
        authenticateCompanyMiddleware,
        verifyCompanyExistenceMiddleware,
        getVehicleController
    )

    route.put("/vehicles/:plate",
        authenticateCompanyMiddleware,
        verifyCompanyExistenceMiddleware,
        verifyVehicleExistenceMiddleware,
        updateVehicleController
    )

    route.delete("/vehicles/:plate",
        authenticateCompanyMiddleware,
        verifyCompanyExistenceMiddleware,
        verifyVehicleExistenceMiddleware,
        deleteVehicleController

    )

    app.use("/companies/:cnpj",route)
}
export default vehicleRoutes;