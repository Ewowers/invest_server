const { Sequelize } = require("sequelize");
const config = require("config");
const sequelize = new Sequelize(config.get("pg_database"), config.get("pg_username"), config.get("pg_password"), {
  port: 5432,
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
module.exports = sequelize;
