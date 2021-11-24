import clientes from "../models/clientes.js";
import role from "../models/role.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import moment from "moment";

//admin
const registerClientes = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).send("Incomplete data");

  const existingClientes = await clientes.findOne({ name: req.body.name });
  if (existingClientes)
    return res.status(400).send("The clientes already existing");

  const hash = await bcrypt.hash(req.body.password, 10);

  const roleId = await role.findOne({name: "user"});
  if(!roleId) return res.status(400).send({ message: "No role was assigned" });


  const clientesSchema = new clientes({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    roleId: roleId._id,
    registerDate: clientes.getDate,
    dbStatus: true,
  });

  const result = await clientesSchema.save();

  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          _id: result._id,
          name: result.name,
          roleId: result.roleId,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (e) {
    return res.status(400).send({ message: "Register error" });
  }

};

//admin
const listClientes = async (req, res) => {
  const clientesSchema = await clientes.find();
  if (!clientesSchema || clientesSchema.length == 0)
    return res.status(400).send({ Error: "Empty clientes list" });
  return res.status(200).send({ clientesSchema });
};

//admin
const deleteClientes = async (req, res) => {
  const clientesDelete = await clientes.findByIdAndDelete({
    _id: req.params["_id"],
  });
  return !clientesDelete
    ? res.status(400).send("Clientes no found")
    : res.status(200).send("Clientes deleted");
};

//admin y user ojo
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

//admin y user
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
          roleId: clientesLogin.roleId,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (e) {
    return res.status(400).send({ message: "login error" }, e);
  }
};

//admin iria con el register-clientes
const registerAdmin = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.roleId
  )
    return res.status(400).send({ message: "Incomplete data" });

  const existingClientes = await clientes.findOne({ email: req.body.email });
  if (existingClientes)
    return res.status(400).send({ message: "The client is already registered" });

  const passHash = await bcrypt.hash(req.body.password, 10);

  const clientesRegister = new clientes({
    name: req.body.name,
    email: req.body.email,
    password: passHash,
    roleId: req.body.roleId,
    dbStatus: true,
  });

  const result = await clientesRegister.save();
  return !result
    ? res.status(400).send({ message: "Failed to register client" })
    : res.status(200).send({ result });
};

export default {
  registerClientes,
  listClientes,
  deleteClientes,
  updateClientes,
  login,
  registerAdmin,
};
