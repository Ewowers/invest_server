const router = require("express").Router();
const controller = require("../../controller/admin/request.controller");
router.get("/", controller.findAll);
router.post("/applicant", controller.applicant);
router.put("/:id", controller.update);
module.exports = router;
