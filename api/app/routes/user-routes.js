const { verifyUser } = require("../middleware");
const userServices = require("../services/user-services.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  //user registration
  app.post("/register", [verifyUser.checkExistingEmail], userServices.signup);

  //user login
  app.post("/login", userServices.signin);
};
