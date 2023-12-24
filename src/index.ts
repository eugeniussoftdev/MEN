import bodyParser from "body-parser";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { MongoClient } from "mongodb";

import { dbConnect } from "./config/db";

import { routes } from "./routes/routes";

dotenv.config();
dbConnect();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(PORT, () => {
  console.log("*** Running on port", PORT);
});
