const router = require("express").Router();
const controller = require("../../controller/admin/page.controller");
router.get("/", controller.find);
router.get("/:id", controller.findOne);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);
module.exports = router;
