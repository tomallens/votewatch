module.exports = (sequelize, Sequelize) => {
  const approveDisapprove = sequelize.define("approveDisapprove", {
    approved: {
      type: Sequelize.BOOLEAN,
    },
    divisionId: {
      type: Sequelize.INTEGER,
    },
    mpId: {
      type: Sequelize.INTEGER,
    },
  });
  return approveDisapprove;
};