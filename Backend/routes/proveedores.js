import express from "express";
import proveedores from "../controllers/proveedores.js";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";

const router = express.Router();

//http://localhost:3001/api/proveedores/registerProveedores
router.post("/registerProveedores", auth, admin, proveedores.registerProveedores);
router.get("/listProveedores", auth, admin, proveedores.listProveedores);
router.put("/updateProveedores", auth, admin, proveedores.updateProveedores);
router.delete("/deleteProveedores/:_id", auth, admin, proveedores.deleteProveedores);
export default router;
