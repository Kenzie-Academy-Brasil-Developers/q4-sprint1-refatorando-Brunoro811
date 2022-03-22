import { describe, it } from "@jest/globals";
import { verifyDuplicateCnpjMiddleware } from "../../middlewares";
import registerCompanyTest from "../helpers/registerCompany";

import { mockReq,mockRes,nextFx } from "./mockMiddleware";
import { company } from "../dateUserInCompany";


describe("Test Middleware Verify Duplicate Cnpj" , ()=>{

    it("Should be able verify duplicate cnpj and return CNPJ already registered.", ()=>{
        registerCompanyTest();
        
        mockReq.body = company;
        verifyDuplicateCnpjMiddleware(mockReq,mockRes,nextFx);
        
        const expectedStatus = 400;
        expect(mockRes.status).toBeCalledWith(expectedStatus);

        const expectedJsonMessageError = { message: "CNPJ already registered" };
        expect(mockRes.json).toBeCalledWith(expectedJsonMessageError);

    });
});