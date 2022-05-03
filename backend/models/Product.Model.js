const { DataTypes } = require("sequelize");
const { PATTERN_FOR_NAME, PATTER_FOR_URL } = require("../constants/RegexPatterns.js");

const getProductModel = (sequelize) =>
  sequelize.define("product", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(150),
      validate: {
        is: PATTERN_FOR_NAME,
        len: [4,150]
      }
    },
    url_image: {
      type: DataTypes.STRING(250),
      validate:{
        is:PATTER_FOR_URL
      }
    },
    description: {
      type: DataTypes.STRING(30),
    },
    supplier: {
      type: DataTypes.STRING(100),
      validate: {
        is: PATTERN_FOR_NAME,
        len: [4,100]
      }
    },
    supplier_number: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
        isFloat: true,
        isDecimal: true,
      }
    },
    total_availables: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    },
    price: {
      type: DataTypes.FLOAT,
      validate: {
        isInt: true,
        isFloat: true,
        isDecimal: true,
      }
    }

  });

module.exports = {
  productModel: getProductModel
}