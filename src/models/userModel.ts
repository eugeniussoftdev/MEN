import mongoose, { Document, Model } from "mongoose";

const Schema = mongoose.Schema;

interface UserDocument {
  name: string;
  age: number;
  create_date: Date;
}

export const userSchema = new Schema<UserDocument>({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  create_date: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model<UserDocument>("User", userSchema);

export { User, UserDocument };
