import { createConnection } from "typeorm";
import express from "express";
import "reflect-metadata";
import "express-async-errors";
import { estadoRouter } from "./routes/Estado.routes";
import { municipioRouter } from "./routes/Municio.routes";

// Cria a conexão com o banco com base no arquivo ormconfig.json
createConnection();

const app = express();

app.use(express.json());
app.use([estadoRouter, municipioRouter]);

export default app;