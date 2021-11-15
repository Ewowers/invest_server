const controller = require("../controller/user.controller");
const router = require("express").Router();
router.get("/", controller.findAll); //Получить всех пользователей
router.get("/roles", controller.roles); //Получить все роли
router.get("/role=:role", controller.findType); //Получить роль по id
router.get("/user=:id", controller.findOne); //Получить пользователя по id
router.put("/:id", controller.update); //Изменить пользователя по id
router.delete("/:id", controller.delete); //Удалить пользователя по id
router.post("/create", controller.create); //Создание пользователя
router.post("/createRole", controller.createRole); //Создание роли
router.post("/load", controller.load); //Проверка на токен
module.exports = router;
