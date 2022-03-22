import { company, vehicle } from "../dateUserInCompany";
import { database as companies } from "../../configs";

const registerCompanyVehicleTest = () =>{
    /**
    * 
    * A registerCompanyTest é uma função para cadastrar uma companhia ideal, ou seja não será lançado erros, e em seguida realizar os testes.
    *
    */
    company.vehicles = [];
    company.vehicles.push(vehicle);
    companies.push(company);

};
export default registerCompanyVehicleTest;