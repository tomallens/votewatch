module.exports = (sequelize, Sequelize) => {
  const Division = sequelize.define('division', {
    name: {
      type: Sequelize.STRING,
    },
    approves: {
      type: Sequelize.INTEGER,
    },
    disapproves: {
      type: Sequelize.INTEGER,
    },
  });
  return Division;
};
