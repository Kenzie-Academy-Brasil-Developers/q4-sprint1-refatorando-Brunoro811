import { database as companies } from "../../configs";
import {} from ""
import secureReturn from "../secureReturn";

const updateCompanyService = (req) =>{
    let { company } = req;
    let updatedCompany = { ...company, ...req.body };

    let index = companies.indexOf(company);
    
    companies[index] = updatedCompany;
    
    return secureReturn(companies[index])

};
export default updateCompanyService;