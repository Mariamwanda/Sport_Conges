import express from "express";
import {config} from "dotenv"
import cors from "cors";
import router from "./Routes/routes.js";
import { connectDB } from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";
import { utilisateur } from "./config/env.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url))

config({
    path : path.join(process.cwd(),'.env.local')
})


const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/',router)
if(utilisateur){
    app.use(express.static('../dist'))
    app.length('/*',(_,res) => {
      res.sendFile(path.join(__dirname,'../dist/index.html'))
      console.log("salut");
    })
}
connectDB()
.then(() =>{
    app.listen(4000,() =>{
        console.log("j'ai lancé mon serveur");
    });
})
    .catch((e) =>{
        console.log('connecte mongoDb :',e.message
    )
});