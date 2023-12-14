import "reflect-metadata"
import { DataSource } from "typeorm"
import { Customer } from "./entity/Customer"
import "dotenv/config"
import { Brand } from "./entity/Brand"
import { Product } from "./entity/Product"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) ,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: true,
    synchronize: true,
    logging: false,
    entities: [Customer,Brand,Product],
    migrations: ['src/migration/*.ts'],
    subscribers: [],
})
