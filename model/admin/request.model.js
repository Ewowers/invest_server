const { DataTypes } = require("sequelize");
const sequelize = require("../../pg.config");
const Request = sequelize.define(
  "Request",
  {
    // Здесь определяются атрибуты модели
    id: {
      //id
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    project: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    money: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    // Здесь определяются другие настройки модели
  }
);
Request.sync();
module.exports = Request;
