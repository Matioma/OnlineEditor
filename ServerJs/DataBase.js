"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
var mongoose = require("mongoose");
var DataBase = /** @class */ (function () {
    function DataBase() {
        this.user = "admin";
        this.password = "12qw34er";
        this.dataBaseName = "ServiceAccounts";
        this.uri = "mongodb+srv://Admin:" + this.password + "@cluster0.5a2il.mongodb.net/" + this.dataBaseName + "?retryWrites=true&w=majority";
        this.connectToDataBase();
    }
    DataBase.prototype.connectToDataBase = function () {
        mongoose.connect(this.uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        var connection = mongoose.connection;
        connection.once("open", function () {
            console.log("MongoDB database connection established");
        });
    };
    return DataBase;
}());
exports.DataBase = DataBase;
