import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./Customer";
import { Product } from "./Product";

@Entity("transactions")
export class Transaction {
    @PrimaryGeneratedColumn()
    transaction_id: number
    @CreateDateColumn({ type: "time with time zone" })
    transaction_date: Date;
    @Column()
    status: string
    @Column()
    quantity: number
    @Column()
    subtotal:number
    @ManyToOne(()=> Customer, (customer)=> customer.transactions)
    @JoinColumn({name: "customer_id"})
    customer: Customer
    @ManyToOne(()=> Product, (product)=> product.transactions)
    @JoinColumn({name: "product_id"})
    product: Product
}