const {config} = require("dotenv");
const { INVALID_JSON_KEY } = require("../constants/Messages");
config();
const getToken =  (user) =>{
    if(process.env.SECRET_KEY_JSONTOKEN){
        throw new Error(INVALID_JSON_KEY);
    }
    return jwt.sign(user, this.SECRET_KEY_JSONTOKEN, {expiresIn:'30d'});
}

module.exports = {
    getToken
}