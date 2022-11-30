// const { verifyUser } = require('../middleware');
const approvalServices = require('../services/approval-services.js');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'Authorization',
      'Origin, Content-Type, Accept'
    );
    next();
  });

  //user registration
  app.post('/approvals', approvalServices.addApproval);
};