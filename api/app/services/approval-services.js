const database = require('../models');
const Division = database.division;

exports.addApproval = (req, res) => {
  console.log('Request : ', req.body);
  validateRequest(req);

  Division.create({
    approved: req.body.approved,
    divisionId: req.body.divisionId,
    mpId: req.body.mpId,
  })
    .then(res.send({ message: 'Approval sent!' }))
    .catch((exception) => {
      res.status(500).send({ message: exception.message });
    });
};