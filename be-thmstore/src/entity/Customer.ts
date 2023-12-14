import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Product } from "./Product";

@Entity("customers")
export class Customer {
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  profile_picture: string;

  @Column ({nullable: true})
  address: string;

  @Column("boolean", { default: false })
  isAdmin: boolean;

  @CreateDateColumn({ type: "time with time zone" })
  createdAt: Date;

  @ManyToMany(() => Product, (product) => product.customers)
  @JoinTable({
    name: "carts",
    joinColumn: {
      name: "product_id",
      referencedColumnName: "customer_id",
    },
    inverseJoinColumn: {
      name: "customer_id",
      referencedColumnName: "product_id",
    },
  })
  products: Product[];
  
}
