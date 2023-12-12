import { Request, Response } from "express";
import AuthServices from "../services/AuthServices";

export default new (class CustomerControllers {
  register(req: Request, res: Response) {
    AuthServices.register(req, res);
  }
  
  login(req: Request, res: Response) {
    AuthServices.login(req, res);
  }
  auth(req: Request, res: Response) {
    AuthServices.authCheck(req, res);
  }
  
  
})();
