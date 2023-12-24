import { Request, Response } from "express";

import { User } from "../models/userModel";

export const addNewUser = async (req: Request, res: Response) => {
  const newUser = new User(req.body);

  const result = await newUser.save();
  return res.json(result);
};

export const updateUserById = (req: Request, res: Response) => {
  return res.send("UPDATE user");
};

export const getUserById = async (req: Request, res: Response) => {
  const result = await User.find(req.query);
  if (!result.length) {
    return res.json({ message: "User not found" });
  }
  return res.json(result);
};

export const deleteUser = (req: Request, res: Response) => {
  return res.send("Delete New");
};
