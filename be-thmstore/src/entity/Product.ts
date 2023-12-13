import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
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

  @CreateDateColumn({ type: "time with time zone" })
  createdAt: Date;

  @ManyToOne(() => Brand, (brand) => brand.product, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  brand: Brand;
}
