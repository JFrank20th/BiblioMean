import mongoose from "mongoose";

const clientesSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const clientes = mongoose.model("clientes", clientesSchema);

export default clientes;