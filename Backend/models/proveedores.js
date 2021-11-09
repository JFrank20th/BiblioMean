import mongoose from "mongoose";

const proveedoresSchema = new mongoose.Schema({
  name: String,
  address: String,
  registerDate: { type: Date, default: Date.now },
});

const proveedores = mongoose.model("proveedores", proveedoresSchema);

export default proveedores;