import { database as companies } from "../../configs";
import {v4 as uuidv4} from "uuid"
import bcrypt from "bcryptjs";

const registerCompanyService = async (body) =>{
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const company = {
        ...body,
        id: uuidv4(),
        vehicles: [],
        password: hashedPassword,
      };
    companies.push(company);
    return company;
}
export default registerCompanyService;