import mongoose from "mongoose";

const librosSchema = new mongoose.Schema({
  name: String,
  author: String,
  yearPublication: Number,
  registerDate: { type: Date, default: Date.now },
  page: Number,
  gender: String,
  price: Number,
});

const libros = mongoose.model("libros", librosSchema);

export default libros;
