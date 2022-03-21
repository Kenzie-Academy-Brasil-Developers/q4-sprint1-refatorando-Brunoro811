import { Router } from "express";

const route = Router();

const companyRoutes = (app) =>{
    route.post("/register")
    /*route.post("/login",(req,res)=> res.json(""))
    route.get("",(req,res)=> res.json(""))
    route.delete("",(req,res)=> res.json(""))*/

    app.use("/companies",route)
}
export default companyRoutes;


 