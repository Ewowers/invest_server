const { Router } = require("express");
const controller = require("../controller/auth.controller");
const router = Router();
router.post("/", controller.auth); //авторизация
router.get("/active/:id", controller.active); // активация юзера
router.post("/registr", controller.regist); //регистрация
router.post("/onload", controller.onload); //проверка на наличие токина
router.post("/getMy", controller.getMy); //получение данных
router.put("/:id/:username", controller.update); //редактирование
module.exports = router;
