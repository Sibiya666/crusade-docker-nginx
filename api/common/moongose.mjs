import mongoose from "mongoose";
import { MONGO_URL } from "../const/const.mjs";

export const connectDB = () => {
  mongoose.connect(MONGO_URL);
  return mongoose.connection;
};
