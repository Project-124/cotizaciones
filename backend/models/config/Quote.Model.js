const { DataTypes } = require("sequelize");

const getQuoteModel = (sequelize) =>
  sequelize.define("quote", {
    id: {
      ty: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    company_name: {
      type: DataTypes.STRING(60),
    },
    chief_name: {
      type: DataTypes.STRING(100),
    },
    job: {
      type: DataTypes.STRING(100),
    },
    estimated_date: {
      type: DataTypes.DATE,
    },
    description: {
      type: DataTypes.STRING,
    },
    total_per_all_work: {
      type: DataTypes.FLOAT,
    },
    total:{
        type: DataTypes.FLOAT,
    }
  });

module.exports = {
    quoteModel: getQuoteModel
}