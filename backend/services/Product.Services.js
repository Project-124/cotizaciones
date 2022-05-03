
const { getToken } = require('../helpers/Auth.Helper');
const { productModel } = require("../models/config/DatabaseConfig");
const MainService = require("./Main.Service.js");


class ProductService  extends MainService {
    constructor(){
        super(productModel, "Product");
    }

   

}

module.exports = {
    ProductService
}