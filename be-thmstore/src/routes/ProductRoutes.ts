import * as express from "express";
import { jwtAuth } from "../middlewares/jwtAuth";
import ProductControllers from "../controllers/ProductControllers";

const router = express.Router();

// products
router.get("/products", jwtAuth, ProductControllers.find);
router.post("/product", jwtAuth, ProductControllers.create);

export default router;
