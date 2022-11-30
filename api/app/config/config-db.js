module.exports = {
  HOST: "localhost",
  USER: "joe",
  PASSWORD: "password",
  DB: "votewatch",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
