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
      const loginSession = res.locals.auth;
      const {status_payment,status_pengiriman,quantity,subtotal, product_id } = req.body
      const customer = this.CustomerRepository.findOne({
        where: {
          customer_id: loginSession.id
        }
      })
      const product = this.ProductRepository.findOne({
        where: {
          product_id: product_id
        }
      })

      if(!customer || !product) return res.status(404).json({
        message: "Customer or Product not found"
      })

      const transaction = this.TransactionRepository.create({
        status_payment: status_payment,
        status_pengiriman: status_pengiriman,
        quantity: quantity,
        subtotal: subtotal,
        product: product_id,
        customer: loginSession.id
      })

      const createTransaction = await this.TransactionRepository.save(transaction)
      return res.status(200).json({
        message: "Success Create Transaction",
        code: 200,
        status: "success",
        data: createTransaction
      })


    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
})();
