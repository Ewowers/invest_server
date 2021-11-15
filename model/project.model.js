const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");
const Project = sequelize.define(
  "Project",
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
      //Название
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    type: {
      //Категория
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      //Требуемая сумма
      type: DataTypes.STRING(400),
      allowNull: false,
    },
    date: {
      //Срок
      type: DataTypes.DATE,
      allowNull: false,
    },
    dateStart: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    description: {
      //Описание
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //короткое описание
    descriptionMin: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      // id автора
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    investors: {
      //инвесторы
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    region: {
      //город
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    question: {
      type: DataTypes.JSON,
    },
    money: {
      //собранно деняг
      type: DataTypes.STRING,
      defaultValue: "0",
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    // Здесь определяются другие настройки модели
  }
);
const start = async () => {
  console.log("model project");
  try {
    Project.sync();
  } catch {
    await Project.sync({ force: true });
  }
};
start();
module.exports = Project;
