const Controller = require("../../controller/admin/feedback.controller");
const router = require("express").Router();
const control = new Controller();
router.post("/", control.create);
router.put("/:id", control.update);
router.get("/", control.findAll);
module.exports = router;
