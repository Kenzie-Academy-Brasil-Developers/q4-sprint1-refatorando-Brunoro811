import { company } from "../dateUserInCompany";
import { database as companies } from "../../configs";

import request from "supertest";
import app from "../../app";


const loginCompanyForRouteTest = async() =>{

    const { cnpj, password } = company;
    const jsonLogin = {cnpj: cnpj, password: password};

    const response = await
    request(app)
    .post("/companies/login")
    .send(jsonLogin);
    return response.body.token;

};
export default loginCompanyForRouteTest;