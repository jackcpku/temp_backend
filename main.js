import express from "express";
import cors from "cors";

import { constFeeds, dynamicFeeds } from "./feeds.js";

const app = express();
const port = 8000;

app.use(cors()); // Use this after the variable declaration

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/feeds", (req, res) => {
  // res.json(constFeeds());
  res.json(dynamicFeeds(20));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
