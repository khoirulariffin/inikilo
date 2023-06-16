const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, salt);
};

const checkPassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword);
};

module.exports = {
    hashPassword,
    checkPassword
};