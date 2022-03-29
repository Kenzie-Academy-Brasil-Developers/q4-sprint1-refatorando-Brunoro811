import { deleteVehicleService } from "../../services";

const deleteVehicle = (req,res) =>{
  
  const vehicleDeleted = deleteVehicleService(req);
    return res
      .status(200)
      .json({ messagem: "Vehicle deleted", vehicles: vehicleDeleted });
}
export default deleteVehicle; 