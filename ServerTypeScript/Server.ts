import express = require("express");
import path = require("path");
import mongoose = require("mongoose");

import User = require("./Models/User");

import { DataBase } from "./DataBase";

const app: express.Application = express();
const dataBase = new DataBase();
const UserClass = User;

const staticPath: string = path.join(__dirname, "../public");

app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(path.join(staticPath, "/html/index.html"));
});

app.post("/api/register", function (req, res) {
  let ClientData = new UserClass({
    Login: req.body.login,
    Password: req.body.password,
  });

  ClientData.save((err: any) => {
    if (err) console.log(err);
    console.log("Succsefully saved the user data");
  });

  res.redirect("/");
});

app.listen(3000, function () {
  console.log(`App is listening on port 3000!`);
});
