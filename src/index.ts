import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { MongoClient } from "mongodb";

import { dbConnect } from "./config/db";

import { routes } from "./routes/routes";

dotenv.config();
dbConnect();

const PORT = process.env.PORT || 8000;

const app = express();

routes(app);
// app.get("/", (req: Request, res: Response) => {
//   res.send("Running....");
// });

// function test(s: any): any {
//   console.log(s);
//   return s;
// }

// test("WWWW");

app.listen(PORT, () => {
  console.log("*** Running on port", PORT);
});
