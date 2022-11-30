const database = require("../models");
const approveDisapprove = database.approveDisapprove;

exports.addApproveDisapprove = (req, res) => {
  console.log("Request : ", req.body);

  approveDisapprove
    .create({
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
