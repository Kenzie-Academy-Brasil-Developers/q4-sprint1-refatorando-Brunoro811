import { company } from "../dateUserInCompany";
import { database as companies } from "../../configs";

import request from "supertest";
import app from "../../app";


const registerCompanyForRouteTest = async() =>{
    /**
    * 
    * A registerCompanyTest é uma função para cadastrar uma companhia ideal, ou seja não será lançado erros, e em seguida realizar os testes.
    *
    */
    const response = await
    request(app)
    .post("/companies/register")
    .send(company);
    const responseCompany = response.body.company;

};
export default registerCompanyForRouteTest;