"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helper/hashingPassword");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Favorite, { foreignKey: "IdCustomer" });
    }
  }
  Customer.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Email is required!",
          },
          notEmpty: {
            msg: "Email is required!",
          },
          isEmail: {
            msg: "Email not valid!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password is required!",
          },
          notEmpty: {
            msg: "Password is required!",
          },
          len: {
            args: [5],
            msg: "Password length must minimum 5 character",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "customer",
        allowNull: false,
        validate: {
          notNull: {
            msg: "Role is required!",
          },
          notEmpty: {
            msg: "Role is required!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Customer",
      hooks: {
        beforeCreate: (user, options) => {
          user.password = hashPassword(user.password);
        },
      },
    }
  );
  return Customer;
};
