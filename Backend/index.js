import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
import clientes from "./routes/clientes.js";
import libros from "./routes/libros.js";
import proveedores from "./routes/proveedores.js";
import role from "./routes/role.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/clientes", clientes);
app.use("/api/libros", libros);
app.use("/api/proveedores", proveedores);
app.use("/api/role", role);

app.listen(process.env.PORT, () =>
  console.log("Backend server Running on port: " + process.env.PORT)
);

db.dbconnection();
