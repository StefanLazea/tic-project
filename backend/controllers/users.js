const firebase = require('firebase');

const getUsers = (req, res) => {
    return res.send({ message: "N/A" });
}

const updateUserById = (req, res) => {
    return res.send({ message: "N/A" });
}

const deleteUserById = (req, res) => {
    return res.send({ message: "N/A" });
}

const registerRTDB = (req, res) => {
    let firebaseRef = firebase.database();
    let userTable = firebaseRef.ref("/users/");
    let user = {
        firstName: req.body.firstName,
        email: req.body.email,
        lastName: req.body.lastName,
        phone: req.body.phone,
    }

    try {
        userTable.push(user);
        return res.send({ message: "User created" });

    } catch (err) {
        return res.send({ message: "Error " + err })
    }
}

module.exports = {
    getUsers,
    updateUserById,
    deleteUserById,
}