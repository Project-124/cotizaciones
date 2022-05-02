const { DataTypes } = require("sequelize");
const { PATTERN_FOR_NAME } = require("../../constants/RegexPatterns");

const getUserModel = (sequelize) =>
  sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(60),
      validate:{
        is:PATTERN_FOR_NAME,
        len: [4,30]
      }
      
    },
    middle_name: {
      type: DataTypes.STRING(30),
      validate:{
        is:PATTERN_FOR_NAME,
        len: [4,30]
      }
    },
    last_name: {
      type: DataTypes.STRING(30),
      validate:{
        is:PATTERN_FOR_NAME,
        len: [4,30]
      }
    },
    email: {
      type: DataTypes.STRING(255),
      validate:{
        isEmail:true
      }
    },
    password: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.STRING,
    },
  });

module.exports = {
    userModel: getUserModel
}