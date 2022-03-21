import { database as companies } from "../../configs"

const update = (req,res)=>{
    let { company } = req;
    let updatedCompany = { ...company, ...req.body };

    let index = companies.indexOf(company);

    companies[index] = updatedCompany;

    return res.status(200).json({ messagem: "Company updated", companies });
  
}
export default update;