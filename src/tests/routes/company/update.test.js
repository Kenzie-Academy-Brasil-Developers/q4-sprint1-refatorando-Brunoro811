import { describe, it, expect } from "@jest/globals"
import request from "supertest";
import app from "../../../app";

import { registerCompanyForRouteTest, loginCompanyForRouteTest } from "../../helpers";



import { company } from "../../dateUserInCompany"


describe("Test Update", ()=>{

    it("should be able update company return status code 200 and object updated", async ()=>{
        await registerCompanyForRouteTest();
        const token = await loginCompanyForRouteTest();
        
        const companyUpdate = {...company, "name": "companhia2"};
        const response = await 
        request(app).patch(`/companies/${company.cnpj}`,
        ).send(companyUpdate).set('Authorization', `Bearer ${token}`);
        
        const expectedJsonReturnUpdated = {
            messagem: 'Company updated',
            companies: [
              {
                name: 'companhia2',
                cnpj: '12123123000102',
                password: '1234',
                cep: '60000000',
                address: 'rua',
                number: 1,
                state: 'CE',
                city: 'Fortaleza',
                id: expect.anything(),
                vehicles: []
              }
            ]
          }
          
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(expectedJsonReturnUpdated)
        
    }) 
}) 
