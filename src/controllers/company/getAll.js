import {database as companies} from "../../configs"

const getCompany = (req,res)=>{
    return res.status(200).json(companies);
}
export default getCompany; 