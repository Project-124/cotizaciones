
const express  = require("express");
const { UserService } = require("../services/User.Services");
const router = express.Router();


router.post("/register", UserService.create);

router.delete("/delete/:id", UserService.delete);

router.post("/login", UserService.login);

module.exports = router;