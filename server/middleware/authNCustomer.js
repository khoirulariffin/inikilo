const { Customer } = require("../models");

const { tokenVerify } = require("../helper/generateToken");

const authenticate = async (req, res, next) => {
  try {
    let { access_token } = req.headers;
    if (!access_token) {
      throw { name: "InvalidToken" };
    }

    const verify = tokenVerify(access_token);

    const userId = verify.id;

    const user = await Customer.findByPk(userId);
    if (!user) {
      throw { name: "InvalidToken" };
    }

    req.userData = { userId: user.id, userRole: user.role };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authenticate;
