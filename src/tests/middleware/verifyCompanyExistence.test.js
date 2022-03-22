import { describe, expect, it } from "@jest/globals";
import { verifyCompanyExistenceMiddleware } from "../../middlewares";

import { company } from "../dateUserInCompany";
import { mockReq, mockRes, nextFx } from "../middleware/mockMiddleware";


describe("Test Middleware Verify Company Existence." , ()=>{
    
    it("should be able verify company existence and return not registered.", ()=>{
        mockReq.params = company.cnpj;
        verifyCompanyExistenceMiddleware(mockReq,mockRes,nextFx);
        
        const expectedStatus = 400;
        expect(mockRes.status).toBeCalledWith(expectedStatus);
        
        const expectedJsonMessageError = { message: "Company not registered" };
        expect(mockRes.json).toBeCalledWith(expectedJsonMessageError)
    });

});