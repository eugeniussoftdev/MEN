import { Request, Response } from "express";

import { User } from "../models/userModel";

export const getAllUsers = async (req: Request, res: Response) => {
  const result = await User.find();
  return res.json(result);
};

export const addNewUsers = (req: Request, res: Response) => {
  return res.send("");
};

export const deleteManyUsers = (req: Request, res: Response) => {
  return res.send("");
};
