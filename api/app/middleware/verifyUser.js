const database = require("../models");
const User = database.user;

checkExistingEmail = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Email already used!",
      });
      return;
    }
    next();
  });
};

const verifyUser = {
  checkExistingEmail: checkExistingEmail,
};

module.exports = verifyUser;
