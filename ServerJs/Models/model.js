"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    Login: String,
    Password: String,
});
module.exports = mongoose.model("User", UserSchema);
