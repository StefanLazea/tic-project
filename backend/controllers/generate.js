const firebase = require('firebase');
const Helpers = require('../helpers');
const faker = require('faker');
const { fake } = require('faker');

const generateMockCars = (req, res) => {
    let carsCount = req.body.cars_count ? req.body.cars_count : 5;
    try {
        for (let i = 0; i < itemCount.carsCount; i++) {
            carTable.push(car);
        }
        return res.send({ message: `${carsCount} were generated` })
        //TODO partsAdded (parts id, user id)
    } catch (err) {
        return res.send({ message: "Error " + err })
    }
};

const generateData = (req, res) => {
    let initializationCount = req.body.count ? req.body.count : 5;
    let firebaseRef = firebase.database();
    let carTable = firebaseRef.ref("/cars/");
    let partsTable = firebaseRef.ref("/parts/");
    let userTable = firebaseRef.ref("/users/");
    let stockTable = firebaseRef.ref("/stocks/");

    try {
        for (let i = 0; i < initializationCount; i++) {
            let car = Helpers.cars.generateMockCar();
            carTable.push(car);
            let part = Helpers.parts.generateMockPart();
            partsTable.push(part);
            let user = Helpers.users.generateMockUser();
            userTable.push(user);
            let partsOwnership = {
                ownerId: user.email,
                partId: part.code,
                quantity: faker.random.number()
            }
            stockTable.push(partsOwnership);
        }
        return res.send({
            message: "Data saved"
        });
    } catch (err) {
        return res.send({ message: "Error " + err })
    }
}

module.exports = {
    generateMockCars,
    generateData,
}