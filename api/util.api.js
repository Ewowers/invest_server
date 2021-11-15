const router = require("express").Router();
const controller = require("../controller/util.controller");
//города
router.get("/region", controller.regionFindAll);
//Вопрос-ответ проектов
router.get("/question", controller.questionFindAll);
router.post("/question", controller.questionCreate);
//Статус проекта
router.get("/state", controller.stateFindAll);
router.post("/state", controller.stateCreate);
module.exports = router;
