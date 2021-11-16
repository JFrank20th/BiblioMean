import clientes from "../models/clientes.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import moment from "moment";

const registerClientes = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).send("Incomplete data");
  const existingClientes = await clientes.findOne({ name: req.body.name });
  if (existingClientes)
    return res.status(400).send("The clientes already existing");

  const hash = await bcrypt.hash(req.body.password, 10);

  const clientesSchema = new clientes({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    registerDate: clientes.getDate,
    dbStatus: true,
  });

  const result = await clientesSchema.save();
  return !result
    ? res.status(400).send({ message: "Failed to register client" })
    : res.status(200).send({ result });
};

const listClientes = async (req, res) => {
  const clientesSchema = await clientes.find();
  if (!clientesSchema || clientesSchema.length == 0)
    return res.status(400).send({ Error: "Empty clientes list" });
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

const login = async (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.status(400).send({ message: "Incomplete data" });
  const clientesLogin = await clientes.findOne({ email: req.body.email });
  if (!clientesLogin)
    return res.status(400).send({ message: "Wrong email or password 1" });
  const hash = await bcrypt.compare(req.body.password, clientesLogin.password);
  if (!hash)
    return res.status(400).send({ message: "Wrong email or password 2" });
  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          _id: clientesLogin._id,
          name: clientesLogin.name,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (e) {
    return res.status(400).send({ message: "login error" }, e);
  }
};

export default {
  registerClientes,
  listClientes,
  deleteClientes,
  updateClientes,
  login,
};
