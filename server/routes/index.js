const express = require("express");
const router = express.Router();

const productRoute = require("./product");
const categoryRoute = require("./category");
const userRoute = require("./user");
const historyRoute = require("./history");
const publicRoute = require("./pub");
const { errorHandle } = require("../handler/errorHandler");

router.use("/products", productRoute);
router.use("/categories", categoryRoute);
router.use("/users", userRoute);
router.use("/histories", historyRoute);
router.use("/pub", publicRoute);

router.use(errorHandle);

module.exports = router;
