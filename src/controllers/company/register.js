import {v4 as uuidv4} from "uuid"
import bcrypt from "bcryptjs";
import {database as companies} from "../../configs"

const register = async (req,res) =>{
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
    let company = {
      ...req.body,
      id: uuidv4(),
      vehicles: [],
      password: hashedPassword,
    };

    companies.push(company);

    return res.status(201).json({ message: "Company successfully created", company });
}
export default register;