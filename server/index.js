import { configDotenv } from "dotenv";
import cors from "cors"

configDotenv();

import express from "express";
import {DataBaseQuery} from "./DB/DB.js"
import { router } from "./routes/index.js";

const PORT = process.env.PORT || 6780;

const app = express();
app.use(cors())
app.use(express.json())
app.use("/", router)

const StartApp = async () => {
    try {
        app.listen(PORT, () => {
            console.log("Server started on port = " + PORT)
        })
    } catch(err) {
        console.log(err)
    }
}

StartApp();

