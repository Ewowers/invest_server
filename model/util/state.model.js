const { DataTypes } = require("sequelize");
const sequelize = require("../../pg.config");
const State = sequelize.define(
  "State",
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

const start = async () => {
  try {
    await State.sync();
    const test = await State.findAll(); //если база пустая первое значение
    if (test.length === 0) {
      await State.create({ value: "Реализация" });
    }
  } catch {
    await State.sync({ force: true });
    await State.create({ value: "Реализация" });
  }
};
start();
module.exports = State;
