import mongoose from "mongoose";

const db = async () => {
  try {
    // await mongoose.connect("mongodb://localhost:27017/Chat");

    await mongoose.connect(process.env.DB_URL);

    console.log("Database Connected");
      
  } catch (error) {
    console.log(error.message);
  }
};

export default db;
