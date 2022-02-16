const Car = require("../../model/sequelize/Car");;
const RentedCar = require("../../model/sequelize/RentedCar");
const Client = require("../../model/sequelize/Client");

exports.getClients = () => {
    return Client.findAll();
};

exports.getClientsById = (client_id) => {
    return Client.findByPk(client_id,{
        include: [{
            model: RentedCar,
            as: 'rentedcars',
            include: [{
                model: Car,
                as: 'car'
            }]
        }]
    })
};

exports.createClient = (newClientData) => {
    return Client.create({
        drivingLicenseNumber: newClientData.drivingLicenseNumber,
        name: newClientData.name,
        surname: newClientData.surname,
        phoneNumber: newClientData.phoneNumber
    })
};

exports.updateClient = (client_id, clientData) => {
    return Client.update(clientData, {where: { _id: client_id}});
};

exports.deleteClient = (client_id) => {
    return Client.destroy({
        where: { _id: client_id}
    });
};
