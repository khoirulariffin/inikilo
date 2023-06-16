"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favorite.belongsTo(models.Customer, {
        foreignKey: "IdCustomer",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Favorite.belongsTo(models.Product, { foreignKey: "IdProduct" });
    }
  }
  Favorite.init(
    {
      IdCustomer: DataTypes.INTEGER,
      IdProduct: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Favorite",
    }
  );
  return Favorite;
};
