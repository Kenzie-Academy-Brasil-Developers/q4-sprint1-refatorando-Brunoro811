import { describe, it, expect } from "@jest/globals"
import request from "supertest";
import app from "../../../app";

import { company } from "../../dateUserInCompany"


describe("Test Register", ()=>{

    it("should be able register company and return status cide 201", async ()=>{
        
        const resultExpected ='Company successfully created'
        const response = await 
            request(app).post("/companies/register",
            ).send(company)
        
        expect(response.statusCode).toBe(201)
        expect(response.body.message).toStrictEqual(resultExpected)

    }) 
})
