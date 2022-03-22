import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import app from "../../app";

import { authenticateCompanyMiddleware } from "../../middlewares";
import { registerCompanyForRouteTest } from "../helpers";

import { company } from "../dateUserInCompany";
import { mockReq, mockRes, nextFx } from "./mockMiddleware";


describe("Test Middleware Verify Company Authenticate." , ()=>{
    
    it("should be able verify company authenticate and return missing authorization.", async()=>{
        await registerCompanyForRouteTest();
        const loginCompany = {"cnpj": company.cnpj,"password": company.password};

        const response = await 
            request(app)
            .post("/companies/login")
            .send(loginCompany);
        
        mockReq.headers = {}    
        mockReq.headers.authorization = response.body.token;
        authenticateCompanyMiddleware(mockReq,mockRes,nextFx);
        
        const expectedStatus = 401;
        expect(mockRes.status).toBeCalledWith(expectedStatus);
        
        const expectedJsonMessageError = { message: "Invalid Token." };
        expect(mockRes.json).toBeCalledWith(expectedJsonMessageError)
    });

});