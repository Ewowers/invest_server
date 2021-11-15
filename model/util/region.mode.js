const { DataTypes } = require("sequelize");
const sequelize = require("../../pg.config");
const Region = sequelize.define(
  "Region",
  {
    // Здесь определяются атрибуты модели
    id: {
      //id
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    region: {
      type: DataTypes.STRING,
    },
  },
  {
    // Здесь определяются другие настройки модели
  }
);

const create = async () => {
  const test = await Region.findAll();
  if (test.length !== 0) return;
  const arr = [
    "Алма-Ата",
    "Нур-Султан",
    "Шымкент",
    "Актобе",
    "Караганда",
    "Тараз",
    "Павлодар",
    "Усть-Каменогорск",
    "Семей",
    "Атырау",
    "Костанай",
    "Кызылорда",
    "Уральск",
    "Петропавловск",
    "Актау",
    "Темиртау",
    "Туркестан",
    "Кокшетау",
    "Талдыкорган",
    "Экибастуз",
    "Рудный",
    "Жезказган",
    "Жанаозен",
    "Балхаш",
    "Кентау",
    "Каскелен",
    "Сатпаев",
    "Кульсары",
    "Риддер",
    "Щучинск",
    "Арыс",
    "Степногорск",
    "Капшагай",
    "Сарань",
    "Жаркент",
    "Талгар",
    "Аксу",
    "Байконур",
    "Аягоз",
    "Шахтинск",
    "Шу",
    "Сарыагаш",
    "Кандыагаш",
    "Лисаковск",
    "Аксай",
    "Алтай",
    "Житикара",
    "Аральск",
    "Текели",
    "Есик",
    "Каратау",
    "Шардара",
    "Абай",
    "Атбасар",
    "Шалкар",
    "Хромтау",
    "Жетысай",
    "Аркалык",
    "Ленгер",
    "Тобыл",
    "Уштобе",
    "Жанатас",
    "Алга",
    "Шемонаиха",
    "Макинск",
    "Ушарал",
    "Зайсан",
    "Акколь",
    "Приозёрск",
    "Курчатов",
    "Эмба",
    "Тайынша",
    "Сарканд",
    "Есиль",
    "Ерейментау",
    "Серебрянск",
    "Каркаралинск",
    "Каражал",
    "Булаево",
    "Сергеевка",
    "Мамлютка",
    "Форт-Шевченко",
    "Шар",
    "Державинск",
    "Казалинск",
    "Косшы",
    "Степняк",
    "Темир",
    "Жем",
  ];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    await Region.create({ region: element });
  }
};
const start = async () => {
  await Region.sync();
  await create();
};
start();
module.exports = Region;