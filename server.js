// Require needed modules
const { application } = require("express");
const express = require("express");

// Configuration & initializing app
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// Middleware
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Routing
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome, Poggers App about Breads!");
});

// Breads and more breads!
const breadsController = require("./controllers/breads_controller.js");
app.use("/breads", breadsController);

// 404 Page
app.get("*", (req, res) => {
  res.send("404");
});

// Listening
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
