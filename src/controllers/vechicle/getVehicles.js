const getVehicle = (req,res) =>{
    return res.status(200).json(req.company.vehicles);
}
export default getVehicle;