const { DataTypes } = require("sequelize");

const getProductModel = (sequelize) =>
  sequelize.define("product", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(150),
    },
    url_image: {
      type: DataTypes.STRING(250),
    },
    description: {
      type: DataTypes.STRING(30),
    },
    supplier: {
      type: DataTypes.STRING(250),
    },
    supplier_number: {
      type: DataTypes.INTEGER,
    },
    total_availables: {
      type: DataTypes.INTEGER,
    },
    price:{
        type: DataTypes.FLOAT,
    }

  });

module.exports = {
    productModel: getProductModel
}