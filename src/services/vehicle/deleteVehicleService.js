
const deleteVehicleService = (req) =>{
    const { plate } = req.params;

    const { company } = req;
    
    let vehicleDeleted = {}
    company.vehicles = company.vehicles.filter(
      (vehicle) => {
        if(vehicle.plate !== plate){
          return vehicle
        }else{
          vehicleDeleted = vehicle
        }
      }
    );
    return vehicleDeleted
};

export default deleteVehicleService;