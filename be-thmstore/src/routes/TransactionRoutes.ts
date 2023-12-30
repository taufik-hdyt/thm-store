import * as express from "express";
import { jwtAuth } from "../middlewares/jwtAuth";
import TransactionControllers from "../controllers/TransactionControllers";

const router = express.Router();

// products
router.post("/transaction", jwtAuth, TransactionControllers.createTransaction);
router.post("/payment", jwtAuth, TransactionControllers.paymentToken);

export default router;
