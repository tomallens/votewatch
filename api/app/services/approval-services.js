const database = require("../models");
const Approval = database.approval;

exports.addApproval = (req, res) => {
  console.log("Request : ", req.body);

  Approval.create({
    approved: req.body.approved,
    divisionId: req.body.divisionId,
    mpId: req.body.mpId,
  })
    .then(
      res.send({ message: "Approval sent!" }),
      console.log("Approval sent!")
    )
    .catch((exception) => {
      res.status(500).send({ message: exception.message });
    });
};
