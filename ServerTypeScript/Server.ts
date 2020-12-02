import express = require("express");
import path = require("path");

const app: express.Application = express();

const staticPath: string = path.join(__dirname, "../public");

app.use(express.static(staticPath));
app.get("/", function (req, res) {
  res.sendFile(path.join(staticPath, "/html/index.html"));
});

app.listen(3000, function () {
  console.log(`App is listening on port 3000!`);
});
