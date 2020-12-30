const faker = require('faker');

const generateMockCar = () => {
    return {
        vin: faker.vehicle.vin(),
        year: faker.random.number({ min: 1970, max: 2020 }),
        registrationNumber: "AG " + faker.random.number({ min: 10, max: 99 }) + " " + faker.lorem.word(3).toLocaleUpperCase(),
        model: faker.vehicle.model(),
        manufacturer: faker.vehicle.manufacturer(),
        fuel: faker.vehicle.fuel()
    };
}

module.exports = { generateMockCar }