import { registerCompanyService } from "../../services";

const register = async (req,res) =>{
    
    const company = await registerCompanyService(req.body)

    return res.status(201).json({ message: "Company successfully created", company });
}
export default register;