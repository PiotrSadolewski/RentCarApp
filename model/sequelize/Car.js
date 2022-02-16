const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Car = sequelize.define('Car', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    licensePlateNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2,15],
                msg: "Pole powinno zawierać od 2 do 15 znaków"
            }
        }
    },
    mark:{
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
    model:{
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
    dayOfProduction:{
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate:{
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isDate: {
                msg: "Podano błędny format daty"
            },
            isFuture(value){
                if(Date.parse(value) > new Date().getTime()) {
                    throw new Error("Podana data jest z przywszłości");
                }
            }
        }
    },
    pricePerDay:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            min: {
                args: 1000,
                msg : "Pole powinno być liczbą w zakresie od 1000 do 150000"
            },
            max: {
                args: 15000,
                msg: "Pole powinno być liczbą w zakresie od 1000 do 150000"
            }
        }
    }
});

module.exports = Car;

