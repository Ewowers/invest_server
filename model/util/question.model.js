const { DataTypes } = require("sequelize");
const sequelize = require("../../pg.config");
const Question = sequelize.define(
  "Question",
  {
    value: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: true,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);
Question.sync();
module.exports = Question;
