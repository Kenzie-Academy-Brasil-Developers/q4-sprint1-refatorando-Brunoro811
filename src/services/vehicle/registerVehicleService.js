import {v4 as uuidv4} from "uuid";


const registerVehicleService = (req) =>{
    const newVehicle = {
        ...req.body,
        id: uuidv4(),
        acquisition_date: new Date(),
    }
    const { company } = req;
    company.vehicles.push(newVehicle);
    return {
        newVehicle: newVehicle,
        company: company
    }
};
export default registerVehicleService;