import express from "express";
import cors from "cors"
import { db } from "./configs/db.js";
import router from "./routes/routes.js";
const app = express()
const port = process.env.PORT || 4000

try {
    await db.authenticate()
    console.log('Conectado')
} catch (error) {
    console.log(error)    
}

app.use(cors())
app.use(express.json())
app.use('/',router)

app.listen(port, () => {
    console.log('App listening on port http://localhost:4000');
});