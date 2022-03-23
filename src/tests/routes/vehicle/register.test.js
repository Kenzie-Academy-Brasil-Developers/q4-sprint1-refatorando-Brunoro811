import { describe, it, expect } from "@jest/globals"
import request from "supertest";
import app from "../../../app";

import { company, vehicle } from "../../dateUserInCompany";
import { loginCompanyForRouteTest, registerCompanyForRouteTest } from "../../helpers";


describe("Test Register Vehicle", ()=>{

    it("should be able register vehicle and return status code 201", async ()=>{
        await registerCompanyForRouteTest();
        const token = await loginCompanyForRouteTest();

        const response = await 
            request(app).post(`/companies/${company.cnpj}/vehicles`,
            ).send(vehicle).set('Authorization', `Bearer ${token}`);
        
        console.log("Output: ",token);

        /*
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toStrictEqual(resultExpected);*/

    }) ;
});
