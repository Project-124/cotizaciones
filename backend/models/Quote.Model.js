const { DataTypes } = require("sequelize");
const { PATTERN_FOR_NAME } = require("../constants/RegexPatterns");

const getQuoteModel = (sequelize) =>
  sequelize.define("quote", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    company_name: {
      type: DataTypes.STRING(60),
      validate:{
        len: [4,60]
      }
    },
    chief_name: {
      type: DataTypes.STRING(100),
      validate:{
        is:PATTERN_FOR_NAME,
        len: [4,100]
      }
    },
    job: {
      type: DataTypes.STRING(100),
      validate:{
        len: [4,100]
      }
    },
    estimated_date: {
      type: DataTypes.DATE,
      validate:{
        isDate:true
      }
    },
    description: {
      type: DataTypes.STRING,
    },
    total_per_all_work: {
      type: DataTypes.FLOAT,
      validate: {
        isInt: true,
        isFloat: true,
        isDecimal: true,
      }
    },
    total:{
        type: DataTypes.FLOAT,
        validate: {
          isInt: true,
          isFloat: true,
          isDecimal: true,
        }
    }
  });

module.exports = {
    quoteModel: getQuoteModel
}