const update = (req,res) =>{
    let { vehicle, company } = req;

    let updatedVehicle = { ...vehicle, ...req.body };

    let index = company.vehicles.indexOf(vehicle);

    company.vehicles[index] = updatedVehicle;

    return res
      .status(200)
      .json({ message: "Vehicle updated", vehicle: updatedVehicle });
}

export default update;