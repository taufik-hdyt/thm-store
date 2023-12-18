import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Brand } from "./Brand";
import { Customer } from "./Customer";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  product_name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  image: string;

  @CreateDateColumn({ type: "time with time zone" })
  createdAt: Date;

  @ManyToOne(() => Brand, (brand) => brand.product, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({name: "brand_id"})
  brand: Brand;

  @ManyToMany(() => Customer, (customer) => customer.products)
  customers: Customer[];
}
