import { describe, expect, it } from "@jest/globals";
import request from "supertest";

import app from "../../../app"


describe("Test route GET /companies ", ()=>{
    it("should be able return company list.", async()=>{
        const response = await 
        request(app).get("/companies");
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual([])
    })
});