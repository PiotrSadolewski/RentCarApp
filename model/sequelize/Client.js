const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Client = sequelize.define('Client', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    drivingLicenseNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [6,6],
                msg: "Pole powinno zawierać 6 znaków"
            }
        },
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2,50],
                msg: "Pole powinno zawierać od 2 do 50 znaków"
            }
        } 
    },
    surname:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2,50],
                msg: "Pole powinno zawierać od 2 do 50 znaków"
            }
        } 
    },
    phoneNumber:{
        type: Sequelize.STRING,
        allowNull: true
    },
});

module.exports = Client;