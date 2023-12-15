import { AppDataSource } from "./data-source";
import * as express from "express";
import * as cors from "cors";
import { Request, Response } from "express";
import "dotenv/config";
import CustomerRoutes from "./routes/CustomerRoutes";
import BrandRoutes from './routes/BrandRoutes'
import UploadRoutes from './routes/UploadRoutes'

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = process.env.PORT;
    app.use(cors());
    app.use(express.json());

    // Connect API
    app.get("/", (req: Request, res: Response) => {
      res.send("Connect");
    });

    // ROUTES
    app.use("/api/v1", CustomerRoutes);
    app.use("/api/v1", BrandRoutes);
    app.use('/api/v1', UploadRoutes)

    



    // Listern Port
    app.listen(port, () => {
      console.log(`Server running on PORT ${port}`);
    });
  })
  .catch((error) => console.log(error));
