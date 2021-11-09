import mongoose from "mongoose";

const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB: Ok");
  } catch (e) {
    console.log("Error Connecting to MongoDB: \n" + e);
  }
};

export default { dbconnection };
