import dns from "node:dns";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URL;
    if (!mongoUri) {
      throw new Error("Missing MONGODB_URL in server/.env");
    }

    // Use public DNS so MongoDB SRV lookups work reliably in Node.
    // It tells Node to use Google DNS for lookups done through Node’s DNS APIs.
    // Then the problem was:
    // Your MongoDB URL uses mongodb+srv://
    // nslookup on Windows could resolve it
    // But Node.js could not resolve the SRV DNS record
    // So Mongoose failed before connecting
    dns.setServers(["8.8.8.8", "8.8.4.4"]);

    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
