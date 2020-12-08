"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var User = require("./Models/User");
var DataBase_1 = require("./DataBase");
var app = express();
var dataBase = new DataBase_1.DataBase();
var UserClass = User;
var staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.sendFile(path.join(staticPath, "/html/index.html"));
});
app.post("/api/register", function (req, res) {
    var ClientData = new UserClass({
        Login: req.body.login,
        Password: req.body.password,
    });
    ClientData.save(function (err) {
        if (err)
            console.log(err);
        console.log("Succsefully saved the user data");
    });
    res.redirect("/");
});
app.listen(3000, function () {
    console.log("App is listening on port 3000!");
});
