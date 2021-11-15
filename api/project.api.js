const { Router } = require("express");
const controller = require("../controller/project.controller");
const router = Router();
router.post("/", controller.create); //создание проекта
router.post("/applicant", controller.applicant); //создание проекта юзером
router.get("/my", controller.getMy); //получение проектов пользователя
router.put("/complite/:id", controller.complite); //Одобрение заявки проекта
router.put("/:id", controller.update); //измение проекта
router.delete("/:id", controller.destroy); //удаление проекта
router.get("/type", controller.getType); //получение всех категорий проектов
router.get("/", controller.findAll); //получение всех пользователей
router.get("/ids=:ids", controller.findByIds); //получение нескольких
router.get("/:id", controller.findById); //получение по id
router.post("/type", controller.createType); //создание категорий проекта

router.post("/favorite/:id", controller.favorite); //избранное добавить
module.exports = router;
