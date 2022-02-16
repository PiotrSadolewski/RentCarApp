const CarRepository = require('../repository/sequelize/CarRepository');

exports.showCarsList = (req, res, next) => {
    CarRepository.getCars()
    .then(cars =>{
        res.render('pages/cars/list', {
            validationErrors: [],
            Cars: cars,
            navLocation: 'cars'
        })
    })
}

exports.showAddCarForm = (req, res, next) => {
    res.render('pages/cars/form', {
        validationErrors: [],
        Car: {},
        pageTitle: 'Nowy samochód',
        formMode: 'createNew',
        btnLabel: 'Dodaj samochód',
        formAction: '/cars/add',
        navLocation: 'cars'
    });
}

exports.showCarDetails = (req, res, next) => {
    const car_id = req.params.car_id;
    CarRepository.getCarsById(car_id)
        .then(car =>{
            res.render('pages/cars/form', {
                validationErrors: [],
                Car: car,
                pageTitle: 'Szczegóły samochodu',
                formMode: 'showDetails',
                btnLabel: 'Edytuj samochów',
                formAction: '',
                navLocation: 'cars'
            });
        });
}

exports.showCarEditForm = (req, res, next) => {
    const car_id = req.params.car_id;
    CarRepository.getCarsById(car_id)
        .then(car =>{
            res.render('pages/cars/form', {
                validationErrors: [],
                Car: car,
                pageTitle: 'Edycja samochodu',
                formMode: 'edit',
                btnLabel: 'Edytuj samochów',
                formAction: '/cars/edit',
                navLocation: 'cars'
            });
        });
}

exports.addCar = (req, res, next) => {
    const carData = { ...req.body };
    CarRepository.createCar(carData)
        .then( result => {
            res.redirect('/cars');
        })
        .catch(err =>{
            res.render('pages/cars/form', {
                Car : carData,
                pageTitle: 'Nowy samochód',
                formMode: 'createNew',
                btnLabel: 'Dodaj samochód',
                formAction: '/cars/add',
                navLocation: 'cars',
                validationErrors : err.errors
            });
        });
};

exports.updateCar = (req, res, next) => {
    const car_id = req.body._id;
    const carData = { ...req.body };

    CarRepository.updateCar(car_id, carData)
        .then( result => {
            res.redirect('/cars');
        })
        .catch(err =>{
            res.render('pages/cars/form', {
                Car : carData,
                pageTitle: 'Edycja samochodu',
                formMode: 'edit',
                btnLabel: 'Edytuj samochów',
                formAction: '/cars/edit',
                navLocation: 'cars',
                validationErrors : err.errors
            });
        });
};

exports.deleteCar = (req, res, next) => {
    const car_id = req.params.car_id;

    CarRepository.deleteCar(car_id)
    .then( () => {
        res.redirect('/cars');
    });
};
