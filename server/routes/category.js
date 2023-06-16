const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();
const authenticate = require("../middleware/authentication");
const authorize = require("../middleware/authorization");

router.get("/", authenticate, Controller.readCategories);
router.post("/", authenticate, Controller.handleCreateCategories);
router.get("/:id", authenticate, Controller.readCategoryById);
router.put("/:id", authenticate, authorize, Controller.updateCategories);
router.delete("/:id", authenticate, authorize, Controller.deleteCategory);

module.exports = router;
