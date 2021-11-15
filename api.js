const { Router } = require("express");
const auth = require("./api/auth.api");
const project = require("./api/project.api");
const controllerAuth = require("./controller/auth.controller");
const users = require("./api/users.api");
const request = require("./api/admin/request.api");
const page = require("./api/admin/page.api");
const util = require("./api/util.api");
const feedback = require("./api/admin/feedback.api");
const router = Router();
router.use(controllerAuth.user); //проверка токена
router.use("/auth", auth); //роут не требующий токена
router.use("/project", project); //роут для проектов
router.use("/users", users); // роут пользователей
router.use("/page", page); //страницы
router.use("/util", util); //утилы
router.use("/request", request); //заявки на инвистицию
router.use("/feedback", feedback);
module.exports = router;
