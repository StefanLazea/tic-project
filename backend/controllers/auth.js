const bcrypt = require("bcryptjs");
const TokenService = require('../services/token')
const UserService = require("../services/user");
const admin = require('firebase-admin');
const db = require('../firebase/firebase')

const login = async (req, res) => {
    let userFound = await UserService.findUserByEmail(req.body.email);
    console.log(userFound);
    if (!userFound) {
        return res
            .status(404)
            .send({ message: "No email related to an account was found" });
    }

    const validPass = bcrypt.compareSync(req.body.password, userFound.password);
    if (!validPass) {
        return res.status(400).send({ message: "Wrong password" });
    }

    const token = TokenService.createToken(userFound);
    console.log(req.cookies)
    res.cookie("token", token, { secure: false, httpOnly: true })
        .send({
            token: "Bearer " + token
        });
};

const register = async (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    ePassword = bcrypt.hashSync(req.body.password, salt);
    let user = {
        firstName: req.body.firstName,
        email: req.body.email,
        lastName: req.body.lastName,
        password: ePassword,
        phone: req.body.phone,
    }

    try {
        await db.collection('users').add(user);
        return res.send({ message: "User created" });
    } catch (err) {
        return res.send({ message: "Error " + err })
    }
};

module.exports = {    
    login,
    register
}