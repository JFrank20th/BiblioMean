import express from "express";
import libros from "../controllers/libros.js";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";

const router = express.Router();

//http://localhost:3001/api/libros/registerLibros
router.post("/registerLibros", auth, admin, libros.registerLibros);
router.get("/listLibros", auth, libros.listLibros);
router.get("/findlibro/:_id", auth, libros.findlibro);
router.put("/updateLibros", auth, admin, libros.updateLibros);
router.delete("/deleteLibros/:_id", auth, admin, libros.deleteLibros);
export default router;
