
const jwt = require("jsonwebtoken");
const {config} = require("dotenv");
const { INVALID_JSON_KEY } = require("../constants/Messages");
config()
class Auth {
    SECRET_KEY_JSONTOKEN = process.env.SECRET_KEY_JSONTOKEN;
    getToken(user) {
        if(!this.SECRET_KEY_JSONTOKEN){
            throw new Error(INVALID_JSON_KEY);
        }
        return jwt.sign(user, this.SECRET_KEY_JSONTOKEN, {expiresIn:'30d'});
    }

    verifyToken(request,
        response,
        next) {

        const token = request.header('Authorization');
        
        if (!token) {
            return response.status(401).json({ error: 'A token is required' })
        }

        try {
            const decode = jwt.verify(token, this.SECRET_KEY_JSONTOKEN);
            return next();
        }
        catch (error) {

            return response.status(401).json({error: "Invalid Token"});
        }


    }

}