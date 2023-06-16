"use strict";
const { Product } = require("../models");

const authStatus = async (req, res, next) => {
  try {
    const { userId: getId, userRole: getRole } = req.userData;

    if (getRole === "Admin") {
      next();
    } else {
      throw { name: "Forbidden" };
    }
  } catch (err) {
    next(err);
  }
};

module.exports = authStatus;
