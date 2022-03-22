import app from "./app";
import {PORT} from "./configs";
import expressListRoutes from "express-list-routes";

expressListRoutes(app);

app.listen(PORT,()=> console.log(`App rodando na porta: http://localhost:${PORT}`));