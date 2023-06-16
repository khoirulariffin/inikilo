const { hashPassword } = require("../helper/hashingPassword");
const { sequelize } = require("../models");

const seedCategories = async () => {
  try {
    const categories = require("../data/categories.json");

    categories.forEach((category) => {
      category.createdAt = category.updatedAt = new Date();
    });

    await sequelize.queryInterface.bulkInsert("Categories", categories);
  } catch (err) {
    console.log(err);
  }
};
const seedUsers = async () => {
  try {
    const users = require("../data/users.json");

    users.forEach((user) => {
      user.password = hashPassword(user.password);
      user.createdAt = user.updatedAt = new Date();
    });

    await sequelize.queryInterface.bulkInsert("Users", users);
  } catch (err) {
    console.log(err);
  }
};
const seedProducts = async () => {
  try {
    const products = require("../data/products.json");

    products.forEach((product) => {
      product.createdAt = product.updatedAt = new Date();
      product.status = "Active";
    });

    await sequelize.queryInterface.bulkInsert("Products", products);
  } catch (err) {
    console.log(err);
  }
};

const seedCustomer = async () => {
  try {
    const customers = require("../data/customer.json");

    customers.forEach((cust) => {
      cust.createdAt = cust.updatedAt = new Date();
    });

    await sequelize.queryInterface.bulkInsert("Customers", customers);
  } catch (err) {
    console.log(err);
  }
};
const seedFavorites = async () => {
  try {
    const favorites = require("../data/favorites.json");

    favorites.forEach((fav) => {
      fav.createdAt = fav.updatedAt = new Date();
    });

    await sequelize.queryInterface.bulkInsert("Favorites", favorites);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  seedCategories,
  seedUsers,
  seedProducts,
  seedCustomer,
  seedFavorites,
};
