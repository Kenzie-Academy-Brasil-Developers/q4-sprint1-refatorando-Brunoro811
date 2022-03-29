import { updateVehicleService } from "../../services";

const update = (req,res) =>{
  const updatedVehicle = updateVehicleService(req);

    return res
      .status(200)
      .json({ message: "Vehicle updated", vehicle: updatedVehicle });
}

export default update;