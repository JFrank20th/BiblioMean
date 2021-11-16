import proveedores from "../models/proveedores.js";

const registerProveedores = async (req, res) => {
  if (!req.body.name || !req.body.address)
    return res.status(400).send("Incomplete data");
  const existingProveedores = await proveedores.findOne({
    name: req.body.name,
  });
  if (existingProveedores)
    return res.status(400).send("The Proveedor already existing");
  const proveedoresSchema = new proveedores({
    name: req.body.name,
    address: req.body.address,
    registerDate: proveedores.registerDate,
  });
  const result = await proveedoresSchema.save();
  if (!result) res.status(400).send("Failed to register Proveedor");

  return res.status(200).send({ result });
};

const listProveedores = async (req, res) => {
  const proveedoresSchema = await proveedores.find();
  if (!proveedoresSchema || proveedoresSchema.length == 0)
    return res.status(400).send({ Error: "Empty proveedor list" });
  return res.status(200).send({ proveedoresSchema });
};

const deleteProveedores = async (req, res) => {
  const proveedoresDelete = await proveedores.findByIdAndDelete({
    _id: req.params["_id"],
  });
  return !proveedoresDelete
    ? res.status(400).send("Proveedores no found")
    : res.status(200).send("Proveedores deleted");
};

const updateProveedores = async (req, res) => {
  if (!req.body.name || !req.body.address)
    return res.status(400).send("Incomplete data");
  const existingProveedores = await proveedores.findOne({
    name: req.body.name,
    address: req.body.address,
  });
  if (existingProveedores)
    return res.status(400).send("The proveedores already existing");
  const proveedoresUpdate = await proveedores.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    address: req.body.address,
  });
  return !proveedoresUpdate
    ? res.status(400).send("Error editing proveedores")
    : res.status(200).send({ proveedoresUpdate });
};
export default {
  registerProveedores,
  listProveedores,
  updateProveedores,
  deleteProveedores,
};
