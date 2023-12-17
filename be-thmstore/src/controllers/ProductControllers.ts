import { Request, Response } from "express";
import ProductServices from "../services/ProductServices";

export default new (class BrandControllers {
  find(req: Request, res: Response) {
    ProductServices.find(req,res)
  }

  create(req: Request, res: Response) {
    ProductServices.create(req,res)
  }

})();
