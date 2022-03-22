import express from "express";

import companyRoutes from "./company";
import vehicleRoutes from "./vehicle"

const routes = (app)=>{
    app.use(express.json());
    companyRoutes(app)
    vehicleRoutes(app)
}
export default routes; 