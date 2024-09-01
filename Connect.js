// my-backend/server.js
// const express = require("express");
import {express} from 'express'
// const mysql = require("mysql");
import mysql from 'mysql'
// const bodyParser = require("body-parser");
import bodyParser from 'body-parser';
// const cors = require("cors");
import {cors} from 'cors'
import { signuprouter } from './Router/Signup';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create connection to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "elite_event"
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

// Create a simple API to handle POST requests
// app.post("/api/users", (req, res) => {
//   let user = { name: req.body.name, email: req.body.email };
//   let sql = "INSERT INTO userinfo SET ?";
//   let query = db.query(sql, user, (err, result) => {
//     if (err) throw err;
//     res.send("User added to database");
//   });
// });

app.post('/signup',signuprouter)
// Start the server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
