import express from "express";
import libros from "../controllers/libros.js";

const router = express.Router();

//http://localhost:3001/api/libros/registerLibros
router.post("/registerLibros", libros.registerLibros);
router.get("/listLibros", libros.listLibros);
router.put("/updateLibros", libros.updateLibros);
router.delete("/deleteLibros/:_id", libros.deleteLibros);
export default router;
