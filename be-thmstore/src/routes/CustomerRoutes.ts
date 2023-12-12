import * as express from "express";
import CustomerControllers from "../controllers/CustomerControllers";
import {
  runvalidation,
  validatioRegister,
  validationLogin,
} from "../utils/validator";
import { jwtAuth } from "../middlewares/jwtAuth";

const router = express.Router();

// Login Register And Auth
router.post(
  "/register",
  validatioRegister,
  runvalidation,
  CustomerControllers.register
);
router.post(
  "/login",
  validationLogin,
  runvalidation,
  CustomerControllers.login
);

router.get("/auth", jwtAuth, CustomerControllers.auth);

export default router;
