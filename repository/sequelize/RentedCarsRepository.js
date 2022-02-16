const Sequalize = require('sequelize');
const Car = require("../../model/sequelize/Car");;
const RentedCar = require("../../model/sequelize/RentedCar");
const Client = require("../../model/sequelize/Client");

exports.getRentedCars = () => {
    return RentedCar.findAll({include: [
        {
            model: Car,
            as: 'car'
        },
        {
            model: Client,
            as: 'client'
        }
    ]});
}

exports.getRentedCarById = (rentedcars_id) => {
    return RentedCar.findByPk(rentedcars_id, {include: [
        {
            model: Car,
            as: 'car'
        },
        {
            model: Client,
            as: 'client'
        }
    ]
    })
}

exports.createRentedCar = (newRentedCarData) => {
    console.log(JSON.stringify(newRentedCarData));

    return RentedCar.create({
        client_id: newRentedCarData.client_id,
        car_id: newRentedCarData.car_id,
        carRentalDay: newRentedCarData.carRentalDay,
        dayOfReturnCar: newRentedCarData.dayOfReturnCar,
        pricePerDay: newRentedCarData.pricePerDay,
        typeOfRent: newRentedCarData.typeOfRent,
        rentedFor: newRentedCarData.rentedFor
    })
}

exports.updateRentedCar = (rentedcar_id, rentedcarsData) => {
    return RentedCar.update(rentedcarsData, {where: { _id: rentedcar_id}});
}

exports.deleteRentedCar = (rentedcar_id) => {
    return RentedCar.destroy({
        where: { _id: rentedcar_id}
    });
}

exports.deleteManyRentedCars = (rentedcars_ids) => {
    return RentedCar.find({ _id: { [Sequelize.Op.in]: rentedcars_ids}});
}