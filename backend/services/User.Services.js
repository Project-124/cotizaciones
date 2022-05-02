
const bcrypt = require('bcrypt');
const { getToken } = require('../helpers/Auth.Helper');
const saltRounds = 10;
const { userModel } = require("../models/config/DatabaseConfig");


class UserService {

    static async create(response, request) {


        try {
            const findedUser = await Project.findOne({
                where: {
                    email: body.email
                }
            });
            if (findedUser) {
                throw new Error("User was registered");
            }
            const user = await userModel.create(request.body);
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
            const token = getToken({ email: user.email, password: user.password })
            await userModel.update({ password: user.password, token: token }, {
                where: {
                    id: user.id
                }
            });
            response.status(200).json({ token: token });

        } catch (error) {
            response.status(400).json({ error: error.message });

        }

    }
    static delete(response, request) {
        const id = request.params.id;
        userModel.destroy({
            where: {
                id: id
            }
        }).then(() => {
            response.send({ message: "User was deleted successful" });
        }).catch((error) => {
            response.status(500).json({ error: error.message });
        })
    }
    static login(response, request) {
        const body = request.body;
        try {
            const user = await Project.findOne({
                where: {
                    email: body.email
                }
            });
            if (user) {
                const isValidPassword = await bcrypt.compare(body.password, user.password);
                if (isValidPassword) {
                    res.status(200).json({ data: user });
                } else {
                    throw new Error("Invalid password");
                }

            } else {
                throw new Error("User does not exist");
            }

        } catch (error) {
            response.status(400).json({ error: error.message });

        }

    }

}

module.exports = {
    UserService
}