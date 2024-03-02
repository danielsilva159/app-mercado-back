import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "mercado",
  entities: ["./src/modules/**/typeorm/entities/*.ts"],
  migrations: ["./src/shared/typeorm/migrations/*.ts"],
  synchronize: true,
  logging: false,
});
