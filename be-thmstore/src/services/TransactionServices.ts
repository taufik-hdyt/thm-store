import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Customer } from "../entity/Customer";
import { Product } from "../entity/Product";
import { Transaction } from "../entity/Transaction";
import "dotenv/config"
import { generateRandomNumber } from "../utils/randomNumber";

export default new (class TransactionServices {
  private readonly TransactionRepository: Repository<Transaction> =
    AppDataSource.getRepository(Transaction);
    private readonly CustomerRepository: Repository<Customer> =
    AppDataSource.getRepository(Customer);
    private readonly ProductRepository: Repository<Product> =
    AppDataSource.getRepository(Product);

  async addTransaction(req: Request, res: Response): Promise<Response> {
    try {
      

    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
})();
