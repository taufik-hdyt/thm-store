import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Customer } from "../entity/Customer";
import { Product } from "../entity/Product";
import { Transaction } from "../entity/Transaction";
import "dotenv/config";
import * as midtransClient from "midtrans-client";
import { generateRandomNumber } from "../utils/randomNumber";

export default new (class TransactionServices {
  private readonly TransactionRepository: Repository<Transaction> =
    AppDataSource.getRepository(Transaction);
  private readonly CustomerRepository: Repository<Customer> =
    AppDataSource.getRepository(Customer);
  private readonly ProductRepository: Repository<Product> =
    AppDataSource.getRepository(Product);

  private midtransClient = new midtransClient.Snap({
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    isProduction: false,
  });

  async addTransaction(req: Request, res: Response): Promise<Response> {
    try {
      const loginSession = res.locals.auth;
      const {
        status_payment,
        status_pengiriman,
        quantity,
        subtotal,
        product_id,
      } = req.body;
      const customer = this.CustomerRepository.findOne({
        where: {
          customer_id: loginSession.id,
        },
      });
      const product = this.ProductRepository.findOne({
        where: {
          product_id: product_id,
        },
      });

      if (!customer || !product)
        return res.status(404).json({
          message: "Customer or Product not found",
        });

      const transaction = this.TransactionRepository.create({
        status_payment: status_payment,
        status_pengiriman: status_pengiriman,
        quantity: quantity,
        subtotal: subtotal,
        product: product_id,
        customer: loginSession.id,
      });

      const createTransaction = await this.TransactionRepository.save(
        transaction
      );
      return res.status(200).json({
        message: "Success Create Transaction",
        code: 200,
        status: "success",
        data: createTransaction,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  async payment(req: Request, res: Response): Promise<Response> {
    try {
      const { subtotal, quantity, product_id } = req.body;
      const user = await this.CustomerRepository.findOne({
        where: {
          customer_id: res.locals.auth.id,
        },
      });
      if (!user)
        return res.status(404).json({
          message: "User not found",
          success: false,
        });
      const order_id = `TRX-${generateRandomNumber()}`;
      const transactionDetail = {
        transaction_details: {
          order_id: order_id,
          gross_amount: subtotal,
        },
        // item_details: [
        //   {
        // 		product_id: product_id,
        // 		price: price,
        // 		quantity: quantity,
        // 		name: product_name,
        // 	},
        // ],

        customer_details: {
          customer_id: user.customer_id,
          email: user.email,
          full_name: user.fullname,
          phone: user.phone,
        },
        credit_card: {
          secure: true,
        },
      };

      const transactionToken = await this.midtransClient.createTransaction(
        transactionDetail
      );

      const newTransaction = this.TransactionRepository.create({
        no_transaction: order_id,
        customer: { customer_id: user.customer_id },
        product: { product_id: product_id },
        quantity: quantity,
        subtotal: subtotal,
        status_payment: "PENDING",
        status_pengiriman: "ON PROCCESS",
        snap_token: transactionToken.token,
        redirect_url: transactionToken.redirect_url
      });
      await this.TransactionRepository.save(newTransaction);
      return res
        .status(200)
        .json({
          success: true,
          redirect_url: transactionToken.redirect_url,
          token: transactionToken.token,
        });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
  async midtransCallback(req:Request,res:Response):Promise<Response>{
    try {

      const order_id = req.body.order_id
      const transactionStatus = req.body.transactionStatus

      const transaction = await this.TransactionRepository.findOne({
        where: {
          no_transaction: order_id
        }
      })
      if(!transaction) return res.status(404).json({
        message: "Transaction not found",
        status: false
      })

      if(transactionStatus === "settlement" || transactionStatus === "capture"){
        transaction.status_payment = "SUCCESS"
        await this.TransactionRepository.save(transaction)
      }

      return res.status(200).json({
        message: "Success updated payment",
        success: true
      })
      
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
})();
