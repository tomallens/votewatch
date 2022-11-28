const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db/queries");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const createError = require("http-errors");

// enable cors on port
var corsOptions = {
  origin: "http://localhost:19006",
};
app.use(cors(corsOptions));

// setup for receiving JSON
app.use(express.json());
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));

// routes
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

// set port, listen for requests
const port = 3000;
app.set("port", port);
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // respond with details of the error
  res.status(err.status || 500).json({ message: "server error" });
});
