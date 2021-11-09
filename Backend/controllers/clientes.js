import { response } from "express";
import clientes from "../models/clientes.js";

const registerClientes = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).send("Incomplete data");
  const existingClientes = await clientes.findOne({ name: req.body.name });
  if (existingClientes)
    return res.status(400).send("The clientes already existing");
  const clientesSchema = new clientes({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    registerDate: clientes.getDate,
    dbStatus: true,
  });
  const result = await clientesSchema.save();
  if (!result) res.status(400).send("Failed to register clientes");
  return res.status(200).send({ result });
};

const listClientes = async (req, res) => {
  const clientesSchema = await clientes.find();
  if (!clientesSchema || clientesSchema.length == 0)
    return response.status(400).send({ Error: "Empty clientes list" });
  return res.status(200).send({ clientesSchema });
};

const deleteClientes = async (req, res) => {
  const clientesDelete = await clientes.findByIdAndDelete({
    _id: req.params["_id"],
  });
  return !clientesDelete
    ? res.status(400).send("Clientes no found")
    : res.status(200).send("Clientes deleted");
};

const updateClientes = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).send("Incomplete data");
  const existingClientes = await clientes.findOne({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  if (existingClientes)
    return res.status(400).send("The Clientes already existing");
  const clientesUpdate = await clientes.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  return !clientesUpdate
    ? res.status(400).send("Error editing clientes")
    : res.status(200).send({ clientesUpdate });
};

export default {
  registerClientes,
  listClientes,
  deleteClientes,
  updateClientes,
};
