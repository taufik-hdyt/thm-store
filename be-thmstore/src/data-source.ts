import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSOWRD,
    database: process.env.DB_NAME,
    ssl: true,
    synchronize: false,
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: ['src/migration/*.ts'],
    subscribers: [],
})
