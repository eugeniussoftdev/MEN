import express, { Express, Request, Response } from "express";

const handlerFunction = (req: Request, res: Response) => {
  return res.send("Not Implemented");
};
const handlerTestFunction = (req: Request, res: Response) => {
  return res.send("Test Not Implemented");
};
export const routes = (app: Express) => {
  app.route("/").get(handlerFunction);
  app.route("/test").get(handlerTestFunction);
};
