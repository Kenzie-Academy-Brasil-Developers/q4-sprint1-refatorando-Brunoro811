import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {database as companies,config} from "../../configs"


const login = async (req,res) =>{
    const { cnpj, password } = req.body;

    let company = companies.find((company) => company.cnpj === cnpj);
  
    const match = await bcrypt.compare(password, company.password);
  
    if (!company) {
      return res.status(401).json({ message: "Company not found" });
    }
    if (!match) {
      return res.status(401).json({ message: "User and password missmatch." });
    }
  
    let token = jwt.sign({ cnpj: cnpj }, config.secret, {
      expiresIn: config.expiresIn,
    });
  
    return res.status(200).json({ token, company });
}
export default login;