module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    name: {
      type: Sequelize.STRING,
      // validate: {
      //   notEmpty: true,
      // },
    },
    email: {
      type: Sequelize.STRING,
      // validate: {
      //   isEmail: { msg: 'Email format is invalid' },
      //   notEmpty: { args: true, msg: 'Email cannot be empty' },
      // },
    },
    password: {
      type: Sequelize.STRING,
    },
    mpname: {
      type: Sequelize.STRING,
    },
    pushtoken: {
      type: Sequelize.STRING,
    }
  });

  return User;
};