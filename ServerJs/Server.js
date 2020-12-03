"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
console.log("Hello world!!!!");
var staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));
app.get("/", function (req, res) {
    //res.send("400");
    res.sendFile(path.join(staticPath, "/html/index.html"));
});
app.listen(3000, function () {
    console.log("App is listening on port 3000!");
});
