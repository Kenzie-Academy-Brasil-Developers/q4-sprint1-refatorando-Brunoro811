import express from "express";
import routes from "./routes";
import expressListRoutes from "express-list-routes"

const app = express();

routes(app);
expressListRoutes(app);

export default app;