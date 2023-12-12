import { AppDataSource } from "./data-source"
import * as express from 'express'
import * as cors from 'cors'
import { Request, Response } from "express";
import "dotenv/config"

AppDataSource.initialize().then(async () => {
    const app = express()
    const port = process.env.PORT
    app.use(cors())
    app.use(express.json())

    app.get("/" ,(req: Request,res:Response)=> {
        res.send("Connect")
    })

    // ROUTES


    app.listen(port, ()=> {
        console.log(`Server running on PORT ${port}`)
    })
    

  

}).catch(error => console.log(error))
