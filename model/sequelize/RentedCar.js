const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const RentedCar = sequelize.define('RentedCar', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: {
                msg: "Pole jest wymagane"
            }
        } 
    },
    car_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: {
                msg: "Pole jest wymagane"
            }
        } 
    },
    carRentalDay: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        validate:{
            ifNull(value){
                const pattern = /(\d{4})-(\d{2})-(\d{2})/;
                if(value != ""){
                    if(!pattern.test(value)){
                        throw new Error("Podano błędny format daty");
                    }
                }
            }
        }
    },
    rentedFor:{
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
    typeOfRent:{
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
    dayOfReturnCar:{
        type: Sequelize.DATEONLY,
        allowNull: true,
        validate:{
            ifNull(value){
                const pattern = /(\d{4})-(\d{2})-(\d{2})/;
                if(value != ""){
                    if(!pattern.test(value)){
                        throw new Error("Podano błędny format daty");
                    }
                }
            }
        }
    }
});

module.exports = RentedCar;