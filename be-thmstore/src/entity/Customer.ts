import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

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

  
}
