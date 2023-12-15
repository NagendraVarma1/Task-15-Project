const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Veera@512", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize
