import mongoose = require("mongoose");

class DataBase {
  user: String = "admin";
  password: String = "12qw34er";
  dataBaseName: String = "ServiceAccounts";
  uri = `mongodb+srv://Admin:${this.password}@cluster0.5a2il.mongodb.net/${this.dataBaseName}?retryWrites=true&w=majority`;

  constructor() {
    this.connectToDataBase();
  }

  connectToDataBase() {
    mongoose.connect(this.uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    const connection = mongoose.connection;

    connection.once("open", function () {
      console.log("MongoDB database connection established");
    });
  }
}
export { DataBase };
