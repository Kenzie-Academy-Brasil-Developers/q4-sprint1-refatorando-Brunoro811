import { describe, it } from "@jest/globals";
import { v4 as uuidv4 } from "uuid";

import { registerCompanyVehicleTest } from "../helpers";
import { verifyDuplicateVehiclePlateMiddleware } from "../../middlewares";

import { mockReq,mockRes,nextFx } from "./mockMiddleware";
import { vehicle } from "../dateUserInCompany";

describe("Test Middleware verify Duplicate Vehicle Plate.", ()=>{
    it("Should be able verify duplicate vehicle plate and return vehicle already registered.",()=>{
        registerCompanyVehicleTest();
        mockReq.body ={
            ...vehicle,
            id: uuidv4(),
            acquisition_date: new Date(),
        }
        verifyDuplicateVehiclePlateMiddleware(mockReq,mockRes,nextFx);

        const expetedStatus = 400;
        expect(mockRes.status).toBeCalledWith(expetedStatus);

        const expectedJsonMessageError = { message: "Vehicle already registered" };
        expect(mockRes.json).toBeCalledWith(expectedJsonMessageError);

    });
});