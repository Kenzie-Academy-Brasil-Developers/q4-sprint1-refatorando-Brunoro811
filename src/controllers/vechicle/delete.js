const deleteVehicle = (req,res) =>{
    let { plate } = req.params;

    let { company } = req;

    company.vehicles = company.vehicles.filter(
      (vehicle) => vehicle.plate !== plate
    );

    return res
      .status(200)
      .json({ messagem: "Vehicle deleted", vehicles: company.vehicles });
}
export default deleteVehicle;