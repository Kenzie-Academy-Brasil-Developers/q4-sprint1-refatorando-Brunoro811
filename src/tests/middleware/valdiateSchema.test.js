import { describe,it } from "@jest/globals";
import { validateSchemaMiddleware } from "../../middlewares";

import { companySchema } from "../../shapes";
import { wrongCompany } from "../dateUserInCompany";
import { mockReq,mockRes,nextFx } from "../middleware/mockMiddleware";

describe("Test Middleware", ()=>{

    it("should be able thow error in validadeSchema", async()=>{

        mockReq.body = wrongCompany;
        await validateSchemaMiddleware(companySchema)(mockReq,mockRes,nextFx);
        
        const expectedStatusCode = 400;
        expect(mockRes.status).toBeCalledWith(expectedStatusCode);
        
        const expectedJsonMessageError = {"error": expect.anything()};
        expect(mockRes.json).toBeCalledWith(expectedJsonMessageError);
    });


});