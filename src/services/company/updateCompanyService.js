import { database as companies } from "../../configs";
import {} from ""

const updateCompanyService = (req) =>{
    let { company } = req;
    let updatedCompany = { ...company, ...req.body };

    let index = companies.indexOf(company);
    
    companies[index] = updatedCompany;

    return companies[index]

};
export default updateCompanyService;