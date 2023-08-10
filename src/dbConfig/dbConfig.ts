import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!)
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log("Database connected successfully");
      process.exit();
    })

    connection.on('error', (error) => {
      console.log("Error connecting to database: ", error);
    })

  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
}