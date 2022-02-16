const CarRepository = require('../repository/sequelize/CarRepository');

exports.getCars = (req,res,next) => {
    CarRepository.getCars()
        .then(car => {
            res.status(200).json(car);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getCarById = (req,res,next) => {
    const car_id = req.params.car_id;

    CarRepository.getCarById(car_id)
        .then(car => {
            if(!car){
                res.status(400).json({
                    message: 'Car with id: ' + car_id + ' not found'
                });
            } else {
                res.status(200).json(car);
            }
        })
        .catch(err => {
            console.log(err);
        })
}

exports.createCar = (req,res,next) => {
    CarRepository.createCar(req.body)
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

exports.updateCar = (req,res,next) => {
    const car_id = req.params.car_id;

    CarRepository.updateCar(car_id, req.body)
        .then(result => {
            res.status(200).json({message: 'Car updated!', car: result});
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        })
}

exports.deleteCar = (req,res,next) => {
    const car_id = req.params.car_id;

    CarRepository.deleteCar(car_id, req.body)
        .then( result => {
            res.status(200).json({message: 'Removed car!', car: result});
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        })
}