const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authNCustomer");
const { CustomerController } = require("../controllers/customerController");

router.post("/register", CustomerController.register);
router.post("/login", CustomerController.login);
router.post("/loginGoogle", CustomerController.loginGoogle);
router.get("/products", CustomerController.getAllProducts);
router.get("/products/:id", CustomerController.getProductById);
router.get(
  "/customer/favorites",
  authenticate,
  CustomerController.getFavorites
);
router.post(
  "/products/:id/favorite",
  authenticate,
  CustomerController.addFavorites
);
module.exports = router;
