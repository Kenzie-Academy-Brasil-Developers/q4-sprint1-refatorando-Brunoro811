import { database as companies } from "../../configs"

const deleteCompany = (req,res) =>{
    let { cnpj } = req.params;

    companies = companies.filter((company) => company.cnpj !== cnpj);

    return res.status(200).json({ messagem: "Company deleted", companies });
}
export default deleteCompany;