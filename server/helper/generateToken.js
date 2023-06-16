if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const jwt = require("jsonwebtoken");
// const SECRET_KEY = 'SECRETKEY';
const SECRET_KEY = process.env.SECRETKEY;

const generatedToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY);
};

const tokenVerify = (myToken) => {
  return jwt.verify(myToken, SECRET_KEY);
};

module.exports = { generatedToken, tokenVerify };
