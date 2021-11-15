const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");
const Roles = sequelize.define(
  "roles",
  {
    value: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    import: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);
const start = async () => {
  await Roles.sync();
  await Roles.findOrCreate({
    where: { value: "investor" },
    defaults: { description: "Инвестор", import: 1 },
  });
  await Roles.findOrCreate({
    where: { value: "applicant" },
    defaults: { description: "Соискатель", import: 1 },
  });
  await Roles.findOrCreate({
    where: { value: "cooperative" },
    defaults: { description: "Партнер", import: 1 },
  });
  await Roles.findOrCreate({
    where: { value: "admin" },
    defaults: { description: "Админ", import: 5 },
  });
};
start();
module.exports = Roles;
