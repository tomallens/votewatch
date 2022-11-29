const { verifyUser } = require("../middleware");
const userServices = require("../services/user-services.js");

module.exports = function (app) {
  var setResponseHeader = function (request, response, next) {
    response.setHeader(
      "Access-Control-Allow-Headers",
      "Authorization",
      "Origin, Content-Type, Accept"
    );
    response.end();
  };

  app.use(setResponseHeader);

  // Original set header function
  // app.use(function (req, res, next) {
  //   res.setHeader(
  //     "Access-Control-Allow-Headers",
  //     "Authorization",
  //     "Origin, Content-Type, Accept"
  //   );
  //   next();
  // });

  //user registration
  app.post("/register", [verifyUser.checkExistingEmail], userServices.signup);

  //user login
  app.post("/login", userServices.signin);
};
