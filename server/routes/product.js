const express = require("express");
const Controller = require("../controllers/controller");
const authenticate = require("../middleware/authentication");
const authorize = require("../middleware/authorization");
const authStatus = require("../middleware/authStatus");
const router = express.Router();

router.get("/", authenticate, Controller.readProduct);
router.post("/", authenticate, Controller.handleCreateProduct);
router.get("/:id", authenticate, Controller.readProductById);
router.delete("/:id", authenticate, authorize, Controller.deleteProductById);
router.put("/:id", authenticate, authorize, Controller.updateProduct);
router.patch("/:id", authenticate, authStatus, Controller.setStatus);

module.exports = router;
