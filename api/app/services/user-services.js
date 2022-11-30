const database = require("../models");
const configuration = require("../config/config-jwt.js");
const User = database.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  User.create({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    mpname: req.body.mpname,
  })
    .then(res.send({ message: "User successfully registered" }))
    .catch((exception) => {
      res.status(500).send({ message: exception.message });
    });
};

exports.signin = (req, res) => {
  validateRequest(req);

  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found",
        });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid password!",
        });
      }

      // Set expired token in 10 minutes
      var token = jwt.sign({ id: user.id }, configuration.secret, {
        expiresIn: 86400,
      });

      // user.then(
      return res.status(200).send({
        id: user.id,
        email: user.email,
        accessToken: token,
      });
      // );
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};

function validateRequest(req) {
  if (!req.body) {
    res.status(400).send({
      message: "Request can't be empty!",
    });
    return;
  }
}
