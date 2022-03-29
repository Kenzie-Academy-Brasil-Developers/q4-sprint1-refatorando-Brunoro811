import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {database as companies,config} from "../../configs"

const loginCompanyService = async (body) =>{
    const { cnpj, password } = body;
    const company = companies.find((company) => company.cnpj === cnpj);
    
    if (!company) {
      return { "status": 401, bodyJson:{ message: "Company not found" }};
    }
    
    const match = await bcrypt.compare(password, company.password);
    if (!match) {
        return {"status": 401, bodyJson:{message: "User and password missmatch." }};
    }

    const token = jwt.sign({ cnpj: cnpj }, config.secret, {
      expiresIn: config.expiresIn,
    });
    return {status: 200, bodyJson: {"token": token,"company": company}};
};
export default loginCompanyService;