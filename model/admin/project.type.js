const { DataTypes } = require("sequelize");
const sequelize = require("../../pg.config");
const Project = sequelize.define(
  "TypeProject",
  {
    // Здесь определяются атрибуты модели
    id: {
      //id
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    // Здесь определяются другие настройки модели
  }
);
Project.sync();
module.exports = Project;
