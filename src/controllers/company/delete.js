import { deleteCompanyService } from "../../services";

const deleteCompany = (req,res) =>{

    const companyDeleted = deleteCompanyService(req.params);

    return res.status(200).json({ messagem: "Company deleted", companyDeleted });
}
export default deleteCompany;