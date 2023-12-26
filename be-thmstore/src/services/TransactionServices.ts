import { Repository } from "typeorm";
import { Transaction } from "../entity/Transaction";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Customer } from "../entity/Customer";
import { Product } from "../entity/Product";

export default new (class TransactionServices {
  private readonly TransactionRepository: Repository<Transaction> =
    AppDataSource.getRepository(Transaction);
    private readonly CustomerRepository: Repository<Customer> =
    AppDataSource.getRepository(Customer);
    private readonly ProductRepository: Repository<Product> =
    AppDataSource.getRepository(Product);

<<<<<<< HEAD
//   async addTransaction(req: Request, res: Response): Promise<Response> {
//     try {

//         // const customer = await this.CustomerRepository.findOne({
//         //     where: {
//         //         customer_id: 
//         //     }
//         // })

//     } catch (error) {
//       return res.status(500).json({
//         message: error.message,
//       });
//     }
//   }
// })();
=======
  async addTransaction(req: Request, res: Response): Promise<Response> {
    try {

        // const customer = await this.CustomerRepository.findOne({
        //     where: {
        //         customer_id: 
        //     }
        // })






    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
})();
>>>>>>> 86a46b973caf99199abf8ef17741806d59d4f535
