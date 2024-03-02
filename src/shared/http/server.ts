import cors from "cors";
import express from "express";
import { AppDataSource } from "../typeorm";
import router from "./routes";

const app = express();

app.use(cors());
app.use(router);

AppDataSource.initialize()
  .then((data) => {
    console.log("Postgres inicializado");
  })
  .catch((err) => console.log("Erro durando inicializando do postgres", err));
app.listen(3333, () => {
  console.log("Server started on port 3333");
});
