import { loginCompanyService } from "../../services";

const login = async (req,res) =>{
    const { status, bodyJson } = await loginCompanyService(req.body)
    return res.status(status).json(bodyJson);
}
export default login;