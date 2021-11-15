const { DataTypes } = require("sequelize");
const sequelize = require("../../pg.config");

const Page = sequelize.define(
  "Page",
  {
    // Здесь определяются атрибуты модели
    id: {
      //id
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    //Название страницы
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //минимальная роль
    role: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    //пусть
    uri: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //описание
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //image
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    // Здесь определяются другие настройки модели
  }
);
Page.sync();
module.exports = Page;
