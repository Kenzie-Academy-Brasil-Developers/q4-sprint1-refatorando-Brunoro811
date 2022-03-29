const verifyVehicleExistence = (req, res, next) => {
    let { plate } = req.params;
    const company = req.company;
    
    const vehicle = company.vehicles.find(vehicle=> vehicle.plate === plate)
    
    if (!vehicle) {
      return res.status(400).json({ message: "Vehicle not registered" });
    }
  
    req.vehicle = vehicle;
  
    return next();
};
export default verifyVehicleExistence;