const sequelize = require('./sequelize');

const Car = require('../../model/sequelize/Car');
const Client = require('../../model/sequelize/Client');
const RentedCar = require('../../model/sequelize/RentedCar');

module.exports = () => {
    Car.hasMany(RentedCar, {as: 'rentedcars', foreignKey: {name: 'car_id', allowNull: false}, constraints: true, onDelete: 'Cascade'});
    RentedCar.belongsTo(Car, {as: 'car', foreignKey: {name: 'car_id', allowNull: false}});
    Client.hasMany(RentedCar, {as: 'rentedcars', foreignKey: {name: 'client_id', allowNull: false}, constraints: true, onDelete: 'Cascade'});
    RentedCar.belongsTo(Client, {as: 'client', foreignKey: {name: 'client_id', allowNull: false}});

    let allCars, allClients;
    return sequelize
        .sync({force: true})
        .then(() => {
            return Car.findAll();
        })
        .then(cars => {
            if(!cars || cars.length == 0){
                return Car.bulkCreate([
                    {licensePlateNumber: 'WWY70000', mark: 'Lamborghini', model: 'Aventador', dayOfProduction: '2020-01-01', pricePerDay: 5000},
                    {licensePlateNumber: 'WWY70001', mark: 'Porsche', model: 'Panamera', dayOfProduction: '2020-02-08', pricePerDay: 5000},
                    {licensePlateNumber: 'WWY70002', mark: 'Pagani', model: 'Zonda', dayOfProduction: '2021-03-01', pricePerDay: 5000} 
                ])
                .then( () => {
                    return Car.findAll();
                });
            } else {
                return cars;
            }
        })
        .then( cars => {
            allCars = cars;
            return Client.findAll();
        })
        .then( clients => {
            if(!clients || clients.length == 0){
                return Client.bulkCreate([
                    {drivingLicenseNumber: 'QWE123', name: 'Krzysztoł', surname: 'Kononowicz', phoneNumber:'112112997'},
                    {drivingLicenseNumber: 'QWE223', name: 'Wojciech', surname: 'Suchodolski', phoneNumber:'997112997'},
                    {drivingLicenseNumber: 'QWE263', name: 'Robert', surname: 'Makłowicz', phoneNumber:'880990998'}
                ])
                .then( () => {
                    return Client.findAll();
                });
            } else {
                return clients;
            }
        })
        .then(clients => {
            allClients = clients;
            return RentedCar.findAll();
        })
        .then( rentedcars => {
            if(!rentedcars || rentedcars.length == 0){
                return RentedCar.bulkCreate([
                    {client_id: allClients[0]._id, car_id: allCars[0]._id, carRentalDay: '2021-12-12', rentedFor: '3 miesiące', typeOfRent: 'leasing', dayOfReturnCar: '2021-12-31'},
                    {client_id: allClients[1]._id, car_id: allCars[2]._id, carRentalDay: '2021-12-13', rentedFor: '2 miesiące', typeOfRent: 'wynajem długoterminowa', dayOfReturnCar: '2021-12-29'},
                    {client_id: allClients[2]._id, car_id: allCars[1]._id, carRentalDay: '2021-12-14', rentedFor: '4 miesiące', typeOfRent: 'leasing', dayOfReturnCar: '2021-12-18'}
                ])
            } else {
                return rentedcars;
            }
        })
}