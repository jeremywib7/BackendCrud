import express from "express";
import db from "../config/database.js";
const app = express();


try {
  await db.authenticate();
  console.log('Database connected');
} catch (error) {
  console.error('Connection Error', error);
}

app.listen(3000, ()=> console.log('server running at port 3000'));

