import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { Transaction } from "./Transaction";

@Entity("transaction_products")
export class Transaction_products {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=> Transaction, (transaction)=> transaction.transaction_id)
    @JoinColumn({name: "id_customer"})
    transaction: Transaction

    @ManyToOne(()=> Product, (product)=> product.cart, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    @JoinColumn({name: "id_product"})
    product: Product
}