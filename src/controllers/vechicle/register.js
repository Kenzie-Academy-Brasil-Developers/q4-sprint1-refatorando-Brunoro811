import { registerVehicleService } from "../../services";

const register = (req,res) =>{
     const { company,newVehicle }  = registerVehicleService(req);
  
      return res.status(201).json({
        message: `Vehicle ${newVehicle.model} from year ${newVehicle.year} was acquired to the ${company.name}'s fleet`,
        vehicle: newVehicle,
      });
}
export default register;