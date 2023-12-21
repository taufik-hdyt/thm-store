import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Cart } from "./Cart";
import { Wishlist } from "./Wichlist";

@Entity("customers")
export class Customer {
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column({nullable: true})
  phone: number;

  @Column()
  password: string;

  @Column({nullable:true})
  profile_picture: string;

  @Column ({nullable: true})
  address: string;

  @CreateDateColumn({ type: "time with time zone" })
  createdAt: Date;

  @OneToMany(()=> Cart, (cart)=> cart.customer)
  cart: Cart[]

  @OneToMany(()=> Wishlist, (wishlist)=> wishlist.customer)
  wishlist: Wishlist[]
  
}
