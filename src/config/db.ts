import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connection = await mongoose.connect(
      "mongodb://localhost:27017/nodeApp"
    );
    console.log("*** Connection Host");
  } catch (error) {
    console.log("*** DB Connection Error", error);
  }
}
