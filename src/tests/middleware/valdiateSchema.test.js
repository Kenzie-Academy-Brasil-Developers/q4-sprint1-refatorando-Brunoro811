import { describe,it, jest } from "@jest/globals";

import { validateSchemaMiddleware } from "../../middlewares"

import { companySchema } from "../../shapes"

import { wrongCompany } from "../dateUserInCompany"

describe("Test Middleware", ()=>{

    const mockReq = {};
    const mockRes = {};
    const nextFx = jest.fn();

    beforeEach(() =>{
        mockRes.json = jest.fn().mockReturnValue(mockRes);
        mockRes.status = jest.fn().mockReturnValue(mockRes);
    });

    it("should be able thow error in validadeSchema", async()=>{

        mockReq.body = wrongCompany;
        await validateSchemaMiddleware(companySchema)(mockReq,mockRes,nextFx);
        
        const expectedStatusCode = 400;
        expect(mockRes.status).toBeCalledWith(expectedStatusCode);
        
        const expectedJsonMessageError = {"error": expect.anything()};
        expect(mockRes.json).toBeCalledWith(expectedJsonMessageError);
    });


});