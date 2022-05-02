const { config } = require("dotenv");
const { PREFIX_FOR_ENV, MAX_DB_ENV_PROPERTIES } = require("../../constants/Db");
const { INVALID_DB_CONFIGURATION } = require("../../constants/Messages");
const sequelize = require("sequelize");
const user = require("./User.Model")
const product =  require("./Product.Model")
const quote = require("./Quote.Model");
config();

const includesAllPropertiesForDatabaseConfig = () => {
  const keys = Object.keys(process.env).filter((key) =>
    key.includes(PREFIX_FOR_ENV)
  );
  return keys.length === MAX_DB_ENV_PROPERTIES;
};

const getSequelizeInstance = () => {
  if (!includesAllPropertiesForDatabaseConfig()) {
    throw new Error(INVALID_DB_CONFIGURATION);
  }

  return new sequelize(
    process.env.DB_TABLE_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
    }
  );
};
const sequelizeInstance = getSequelizeInstance();

module.exports = { 
    sequelize: sequelizeInstance,
    userModel: user.userModel(sequelizeInstance),
    productModel: product.productModel(sequelizeInstance),
    quoteModel: quote.quoteModel(sequelizeInstance)
 };
