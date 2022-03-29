import { updateCompanyService } from "../../services";

const update = (req,res)=>{
    const company = updateCompanyService(req);

    return res.status(200).json({ messagem: "Company updated", company });
  
}
export default update;