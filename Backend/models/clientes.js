import mongoose from "mongoose";

const clientesSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  roleId: { type: mongoose.Schema.ObjectId, ref: "roles" },
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const clientes = mongoose.model("clientes", clientesSchema);

export default clientes;