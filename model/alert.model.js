const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");
const Alert = sequelize.define(
  "alert",
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      //id пользователя
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    projectId: {
      //id проекта
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    information: {
      //полное сообщеие
      type: DataTypes.TEXT,
      allowNull: false,
    },
    message: {
      //кратное описание
      type: DataTypes.STRING,
      allowNull: false,
    },
    verifed: {
      //проверино ли сообщение
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {}
);
const start = async () => {
  await Alert.sync();
};
start();
module.exports = Alert;
