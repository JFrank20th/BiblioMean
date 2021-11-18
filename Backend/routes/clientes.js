import express from "express";
import clientes from "../controllers/clientes.js";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";

const router = express.Router();

//http://localhost:3001/api/clientes/registerClientes
router.post("/registerClientes", clientes.registerClientes);
router.post("/login", clientes.login);
router.post("/registerAdmin", clientes.registerAdmin);
router.get("/listClientes", auth, admin, clientes.listClientes);
router.put("/updateClientes", auth, admin, clientes.updateClientes);
router.delete("/deleteClientes/:_id", auth, admin,clientes.deleteClientes);
export default router;
