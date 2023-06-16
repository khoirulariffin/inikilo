"use strict";
const { Product } = require("../models");

const authorize = async (req, res, next) => {
    try {
        const { userId: getId, userRole: getRole } = req.userData;
        const prodId = +req.params.id;

        const product = await Product.findByPk(prodId);

        if (getRole === "Admin" || (getRole === "Staff" && product.authorId === getId)) {
            next();
        } else {
            throw { name: "Forbidden" };
        }
    } catch (err) {
        next(err);
    }
};

module.exports = authorize;
