
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET;
const EXPIRATION_DATE = process.env.EXPIRATION_TIME;

// console.log(TOKEN_SECRET)
// const createToken = (userFound) => {
//     return jwt.sign({ email: userFound.email}, TOKEN_SECRET,
//         {
//             expiresIn: EXPIRATION_DATE
//         });
// }

const secret = 'secret';
const createToken = (userFound) => {
    return jwt.sign(
        {
       email: userFound.email
    },
    secret, {
        expiresIn: "1hr"
    })
}
const getUserEmail = (token) => {
    const decode = jwt.decode(token, secret);
    return decode.email;
}
module.exports = {
    createToken,
    getUserEmail
}