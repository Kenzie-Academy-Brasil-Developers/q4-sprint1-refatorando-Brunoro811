import { company } from "../dateUserInCompany";
import { database as companies } from "../../configs";

const registerCompanyTest = () =>{
    /**
    * 
    * A registerCompanyTest é uma função para cadastrar uma companhia ideal, ou seja não será lançado erros, e em seguida realizar os testes.
    *
    */
    
    companies.push(company);

};
export default registerCompanyTest;