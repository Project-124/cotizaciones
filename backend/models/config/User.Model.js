const { DataTypes } = require("sequelize");

const getUserModel = (sequelize) =>
  sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(60),
      
    },
    middle_name: {
      type: DataTypes.STRING(30),
    },
    last_name: {
      type: DataTypes.STRING(30),
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