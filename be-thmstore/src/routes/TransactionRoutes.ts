import * as express from "express";
import { jwtAuth } from "../middlewares/jwtAuth";
import TransactionControllers from "../controllers/TransactionControllers";

const router = express.Router();

// products
router.post("/transaction", jwtAuth, TransactionControllers.createTransaction);
router.get("/transactions", jwtAuth, TransactionControllers.find);
router.post("/payment", jwtAuth, TransactionControllers.paymentToken);
router.post("/paymentNotification", TransactionControllers.callbackMidtrans);

export default router;
