import express from "express";

import companyRoutes from "./company";

const routes = (app)=>{
    app.use(express.json());
    companyRoutes(app)
}
export default routes; 