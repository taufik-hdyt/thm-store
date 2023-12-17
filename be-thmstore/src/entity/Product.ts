import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
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
  price: string;

  @Column()
  stock: string;

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
