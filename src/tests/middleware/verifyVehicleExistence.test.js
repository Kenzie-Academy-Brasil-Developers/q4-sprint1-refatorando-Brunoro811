import { describe, it} from "@jest/globals";

import { registerCompanyVehicleTest } from "../helpers";
import { verifyVehicleExistenceMiddleware } from "../../middlewares";

import { mockReq,mockRes,nextFx } from "./mockMiddleware";
import { vehicle } from "../dateUserInCompany";

describe("Test Middleware Vehicle Existence", ()=>{
    it("Should be able verify vehicle existence and return vehicle not registered.",()=>{
        
        registerCompanyVehicleTest();
        mockReq.params = vehicle.plate;
        verifyVehicleExistenceMiddleware(mockReq,mockRes,nextFx);

        const expectedStatus = 400;
        expect(mockRes.status).toBeCalledWith(expectedStatus);

        const expectedJsonMessageError = { message: "Vehicle not registered" };
        expect(mockRes.json).toBeCalledWith(expectedJsonMessageError);

        
    });
});