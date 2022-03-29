
const updateVehicleService = (req) =>{
    const { vehicle, company } = req;

    const updatedVehicle = { ...vehicle, ...req.body };

    const index = company.vehicles.indexOf(vehicle);

    company.vehicles[index] = updatedVehicle;
    return updatedVehicle;
}
export default updateVehicleService;