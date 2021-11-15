const { DataTypes } = require("sequelize");
const sequelize = require("../../pg.config");

const FeedBack = sequelize.define(
  "feedback",
  {
    // Здесь определяются атрибуты модели
    id: {
      //id
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      //Имя
      type: DataTypes.STRING,
    },
    phone: {
      //телефон
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      //почта
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      //сообщение
      type: DataTypes.TEXT,
      allowNull: false,
    },
    use: {
      //отвечен ли
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    // Здесь определяются другие настройки модели
  }
);
FeedBack.sync({ alter: true });
module.exports = FeedBack;
