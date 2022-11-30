module.exports = (sequelize, Sequelize) => {
  const Division = sequelize.define('division', {
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
  return Division;
};
