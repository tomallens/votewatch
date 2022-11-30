const { jwtAuth } = require('../middleware');
const productServices = require('../services/division-services.js');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'Authorization',
      'Origin, Content-Type, Accept'
    );
    next();
  });
};
