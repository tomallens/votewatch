module.exports = (sequelize, Sequelize) => {
  const Approval = sequelize.define("approval", {
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
  return Approval;
};
