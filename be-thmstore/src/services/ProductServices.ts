import { Request, Response } from "express";
import { Repository } from "typeorm";
import { Product } from "../entity/Product";
import { AppDataSource } from "../data-source";

export default new (class ProductServices {
  private readonly ProductRepository: Repository<Product> =
    AppDataSource.getRepository(Product);

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const products = await this.ProductRepository.find();
      return res.status(200).json({
        data: products,
        message: "Success get all products",
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const {name,price,stock,brand,description,image} = req.body
      const product = this.ProductRepository.create({
        brand: brand,
        stock: stock,
        price: price,
        description: description,
        product_name: name,
        image: image
      })

      const createProduct = await this.ProductRepository.save(product)
      return res.status(200).json({
        message: "Success add product",
        data: createProduct
      })
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
})();
