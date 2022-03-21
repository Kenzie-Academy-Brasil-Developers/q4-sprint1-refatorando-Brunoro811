//import app from "./app";

import app from "./app"
import {PORT} from "./configs"

app.listen(PORT,()=> console.log(`App rodando na porta: http://localhost:${PORT}`)) 