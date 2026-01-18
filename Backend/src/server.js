import express from "express"

import { ENV } from "./config/env.js";
import path from "path";

const app = express()
const __dirname = path.resolve();


if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../admin/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"));
  });
}


app.listen(3000,()=>{
    console.log("hello  3455678")
})