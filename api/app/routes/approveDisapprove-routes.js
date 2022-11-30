// const { verifyUser } = require('../middleware');
const approveDisapproveServices = require("../services/approveDisapprove-services.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Origin",
      "Authorization",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.patch(
    "/approveDisapprove",
    approveDisapproveServices.addApproveDisapprove
  );
};
