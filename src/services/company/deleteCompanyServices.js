import { database as companies } from "../../configs"

const deleteCompanyService = (params) =>{
    const { cnpj } = params;
    let companyDeleted = {};
    companies = companies.filter((company)=> {
        if(company.cnpj !== cnpj){
            return company;
        }else{
            companyDeleted = company;
        }
    });
    return companyDeleted;
};
export default deleteCompanyService; 