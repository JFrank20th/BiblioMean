import express from "express";
import clientes from "../controllers/clientes.js";

const router = express.Router();

//http://localhost:3001/api/clientes/registerClientes
router.post("/registerClientes", clientes.registerClientes);
router.get("/listClientes", clientes.listClientes);
router.put("/updateClientes",clientes.updateClientes);
router.delete("/deleteClientes/:_id",clientes.deleteClientes);
export default router;