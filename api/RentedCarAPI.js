const RentedCarsRepository = require('../repository/sequelize/RentedCarsRepository');

exports.getRentedCars = (req,res,next) => {
    RentedCarsRepository.getRentedCars()
        .then(rentedcars => {
            res.status(200).json(rentedcars);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getRentedCarById = (req,res,next) => {
    const rentedCar_id = req.params.rentedCar_id;

    RentedCarsRepository.getRentedCarById(rentedCar_id)
        .then(rentedcar => {
            if(!rentedcar){
                res.status(400).json({
                    message: 'Rented car with id: ' + rentedCar_id + ' not found'
                });
            } else {
                res.status(200).json(rentedcar);
            }
        })
        .catch(err => {
            console.log(err);
        })
}

exports.createRentedCar = (req,res,next) => {
    RentedCarsRepository.createRentedCar(req.body)
        .then(newObj => {
            res.status(200).json(newObj);
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        })
}

exports.updateRentedCar = (req,res,next) => {
    const rentedCar_id = req.params.rentedCar_id;

    RentedCarsRepository.updateRentedCar(rentedCar_id, req.body)
        .then(result => {
            res.status(200).json({message: 'Rented car updated!', RentedCar: result});
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        })
}

exports.deleteRentedCar = (req,res,next) => {
    const rentedCar_id = req.params.rentedCar_id;
    console.log(rentedCar_id);

    RentedCarsRepository.deleteRentedCar(rentedCar_id, req.body)
        .then( result => {
            res.status(200).json({message: 'Removed Rented car!', RentedCar: result});
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        })
}