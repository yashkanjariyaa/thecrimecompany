import mongoose from "mongoose";
import { MONGODB_URI } from "../config";

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {});
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connection to MongoDB: ", err);
    process.exit(1);
  }
};

export default connect;