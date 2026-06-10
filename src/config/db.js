import mongoose from "mongoose";

const MONGO_URL =
  process.env.MONGO_URL || "mongodb://localhost:27017/PRE-ENTREGA-MartaAg";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Base de datos conectada correctamente");
  } catch (error) {
    console.log("Error al conectar la base de datos:", error);
    process.exit(1);
  }
};
