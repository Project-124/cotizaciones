
const { getToken } = require('../helpers/Auth.Helper');
const { quoteModel } = require("../models/config/DatabaseConfig");
const MainService = require("./Main.Service");

class QuoteService extends MainService {
    constructor(){
        super(quoteModel, "Quote");
    }
    
}

module.exports = {
    QuoteService
}