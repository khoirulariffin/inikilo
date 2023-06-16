const { sequelize } = require("../models");

const dropCategories = async () => {
  try {
    await sequelize.queryInterface.bulkDelete("Categories", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
  } catch (err) {
    console.log(err);
  }
};
const dropUsers = async () => {
  try {
    await sequelize.queryInterface.bulkDelete("Users", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
  } catch (err) {
    console.log(err);
  }
};
const dropProducts = async () => {
  try {
    await sequelize.queryInterface.bulkDelete("Products", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
  } catch (err) {
    console.log(err);
  }
};
const dropCustomers = async () => {
  try {
    await sequelize.queryInterface.bulkDelete("Customers", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
  } catch (err) {
    console.log(err);
  }
};
const dropFavorites = async () => {
  try {
    await sequelize.queryInterface.bulkDelete("Favorites", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  dropCategories,
  dropUsers,
  dropProducts,
  dropCustomers,
  dropFavorites,
};
