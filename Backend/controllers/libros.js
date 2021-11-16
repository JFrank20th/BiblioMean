import libros from "../models/libros.js";
const registerLibros = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.author ||
    !req.body.yearPublication ||
    !req.body.page ||
    !req.body.gender ||
    !req.body.price
  )
    return res.status(400).send("Incomplete data");
  const existingLibros = await libros.findOne({ name: req.body.name });
  if (existingLibros)
    return res.status(400).send("The libros already existing");
  const librosSchema = new libros({
    name: req.body.name,
    author: req.body.author,
    yearPublication: req.body.yearPublication,
    registerDate: libros.getDate,
    page: req.body.page,
    gender: req.body.gender,
    price: req.body.price,
  });
  const result = await librosSchema.save();
  if (!result) res.status(400).send("Failed to register libros");
  return res.status(200).send({ result });
};

const listLibros = async (req, res) => {
  const librosSchema = await libros.find();
  if (!librosSchema || librosSchema.length == 0)
    return res.status(400).send({ Error: "Empty libros list" });
  return res.status(200).send({ librosSchema });
};

const deleteLibros = async (req, res) => {
  const librosDelete = await libros.findByIdAndDelete({
    _id: req.params["_id"],
  });
  return !librosDelete
    ? res.status(400).send("libros no found")
    : res.status(200).send("libros deleted");
};

const updateLibros = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.author ||
    !req.body.yearPublication ||
    !req.body.page ||
    !req.body.gender ||
    !req.body.price
  )
    return res.status(400).send("Incomplete data");
  const existingLibros = await libros.findOne({
    name: req.body.name,
    author: req.body.author,
    yearPublication: req.body.yearPublication,
    page: req.body.page,
    gender: req.body.gender,
    price: req.body.price,
  });
  if (existingLibros)
    return res.status(400).send("The libros already existing");
  const librosUpdate = await libros.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    author: req.body.author,
    yearPublication: req.body.yearPublication,
    page: req.body.page,
    gender: req.body.gender,
    price: req.body.price,
  });
  return !librosUpdate
    ? res.status(400).send("Error editing libros")
    : res.status(200).send({ librosUpdate });
};

export default { registerLibros, listLibros, deleteLibros, updateLibros };
