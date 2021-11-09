import express from "express";
import proveedores from "../controllers/proveedores.js";

const router = express.Router();

//http://localhost:3001/api/proveedores/registerProveedores
router.post("/registerProveedores", proveedores.registerProveedores);
router.get("/listProveedores", proveedores.listProveedores);
router.put("/updateProveedores", proveedores.updateProveedores);
router.delete("/deleteProveedores/:_id", proveedores.deleteProveedores);
export default router;
