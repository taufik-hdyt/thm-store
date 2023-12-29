import * as express from "express";
import { jwtAuth } from "../middlewares/jwtAuth";
import TransactionControllers from "../controllers/TransactionControllers";

const router = express.Router();

// products
router.post("/transaction", jwtAuth, TransactionControllers.createTransaction);

export default router;
