import * as express from "express";
import { jwtAuth } from "../middlewares/jwtAuth";
import CartController from "../controllers/CartController";


const router = express.Router();

// CART
router.post("/product/:id/cart", jwtAuth, CartController.addToCart);

export default router;
