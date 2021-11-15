const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../pg.config");
const User = sequelize.define(
  "User",
  {
    // Здесь определяются атрибуты модели
    id: {
      //id
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      //имя пользователя
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      //пороль пользователя
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      // роль пользователя
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },

    ip: {
      // ip пользователя
      type: DataTypes.STRING,
      allowNull: false,
    },

    ban: {
      // бан пользователя
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    active: {
      //верификая
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    //данные пользователя
    fullName: {
      //полное имя
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    email: {
      // почта пользователя
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      //Телефон
      type: DataTypes.STRING,
      allowNull: true,
    },
    nameOrganization: {
      //Найменование организаций
      type: DataTypes.STRING,
      allowNull: true,
    },
    //инвестор
    investment: {
      //Инвестиций
      type: DataTypes.JSON,
      defaultValue: [],
    },
    favorite: {
      //Избранные проекты
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    //
    alert: {
      //уведомления
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
  },
  {
    // Здесь определяются другие настройки модели
  }
);
const start = async () => {
  await User.sync({ alter: true });
  await User.findOrCreate({
    where: { username: "admin" },
    defaults: { password: "admin", email: "admin", ip: "0.0.0.0", active: true, role: ["admin"] },
  });
};
start();
module.exports = User;
