const Car = require("../../model/sequelize/Car");;
const RentedCar = require("../../model/sequelize/RentedCar");
const Client = require("../../model/sequelize/Client");

exports.getCars = () => {
    return Car.findAll();
};

exports.getCarsById = (car_id) => {
    return Car.findByPk(car_id, {
        include: [{
            model: RentedCar,
            as: 'rentedcars',
            include: [{
                model: Client,
                as: 'client'
            }]
        }]
    })
}

exports.createCar = (newCarData) => {
    return Car.create({
        licensePlateNumber: newCarData.licensePlateNumber,
        mark: newCarData.mark,
        model: newCarData.model,
        dayOfProduction: newCarData.dayOfProduction,
        pricePerDay: newCarData.pricePerDay
    })
}

exports.updateCar = (car_id, carData) => {
    return Car.update(carData, {where: { _id: car_id}});
}

exports.deleteCar = (car_id) => {
    return Car.destroy({
        where: { _id: car_id}
    });
}