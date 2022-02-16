const RentedCarsRepository = require("../repository/sequelize/RentedCarsRepository");
const CarRepository = require('../repository/sequelize/CarRepository');
const ClientRepository = require('../repository/sequelize/ClientRepository');

exports.showRentedCarsList = (req, res, next) => {
    RentedCarsRepository.getRentedCars()
        .then(rentedcars =>{
            res.render('pages/rented_cars/list', {
                validationErrors: [],
                Rentedcars: rentedcars,
                navLocation: 'rented_cars'
            })
        })
}

exports.showAddRentedCarForm = (req, res, next) => {
    let allCars, allClients;
    CarRepository.getCars()
        .then(cars => {
            allCars = cars;
            return ClientRepository.getClients();
        })
        .then(clients => {
            allClients = clients;
            res.render('pages/rented_cars/form', {
                validationErrors: [],
                Rentedcars: {},
                pageTitle: 'Wynajmij samochód',
                formMode: 'createNew',
                btnLabel: 'Wynajmmij',
                formAction: '/rented_cars/add',
                navLocation: 'rented_cars',
                allCars: allCars,
                allClients: allClients
        });
    });
}

exports.showRentedCarDetails = (req, res, next) => {
    let allCars, allClients;
    const rentedcar_id = req.params.rentedcar_id;

    CarRepository.getCars()
        .then(cars => {
            allCars = cars;
            return ClientRepository.getClients();
        })
        .then(clients => {
            allClients = clients;
            return RentedCarsRepository.getRentedCarById(rentedcar_id);
        })
        .then(rentedcars =>{
            res.render('pages/rented_cars/form', {
                validationErrors: [],
                Rentedcars: rentedcars,
                pageTitle: 'Szczegóły wynajmu',
                formMode: 'showDetails',
                btnLabel: 'Edytuj wynajem',
                formAction: '',
                navLocation: 'rented_cars',
                allCars: allCars,
                allClients: allClients
            });
        });
}

exports.showRentedCarEditForm = (req, res, next) => {
    let allCars, allClients;
    const rentedcar_id = req.params.rentedcar_id;

    CarRepository.getCars()
        .then(cars => {
            allCars = cars;
            return ClientRepository.getClients();
      })
        .then(clients => {
            allClients = clients;
            return RentedCarsRepository.getRentedCarById(rentedcar_id)
       })
        .then(rentedcars =>{
            res.render('pages/rented_cars/form', {
                validationErrors: [],
                Rentedcars: rentedcars,
                pageTitle: 'Edycja wynajmu',
                formMode: 'edit',
                btnLabel: 'Edytuj wynajem',
                formAction: '/rented_cars/edit',
                navLocation: 'rented_cars',
                allCars: allCars,
                allClients: allClients
            });
        });
}


exports.addRentedCar = (req, res, next) => {
    const rentedCarData = { ...req.body };
    RentedCarsRepository.createRentedCar(rentedCarData)
        .then( result => {
            res.redirect('/rented_cars');
        })   
        .catch(err =>{
            CarRepository.getCars()
            .then(cars => {
                allCars = cars;
                return ClientRepository.getClients();
            })
            .then(clients => {
                    allClients = clients;
                    res.render('pages/rented_cars/form', {
                        Rentedcars : rentedCarData,
                        pageTitle: 'Wynajmij samochód',
                        formMode: 'createNew',
                        btnLabel: 'Wynajmmij',
                        formAction: '/rented_cars/add',
                        navLocation: 'rented_cars',
                        allCars: allCars,
                        allClients: allClients,
                        validationErrors : err.errors,
                });
            });
        });
};  

exports.updateRentedCar = (req, res, next) => {
    const rentedcar_id = req.body._id;
    const rentedCarData = { ...req.body };

    RentedCarsRepository.updateRentedCar(rentedcar_id, rentedCarData)
        .then( result => {
            res.redirect('/rented_cars');
        })
        .catch(err =>{
            CarRepository.getCars()
                .then(cars => {
                allCars = cars;
                return ClientRepository.getClients();
            })
             .then(clients => {
                allClients = clients;
                return RentedCarsRepository.getRentedCarById(rentedcar_id)
             })
            .then(rentedcars =>{
                res.render('pages/rented_cars/form', {
                        Rentedcars: rentedcars,
                        pageTitle: 'Edycja wynajmu',
                        formMode: 'edit',
                        btnLabel: 'Edytuj wynajem',
                        formAction: '/rented_cars/edit',
                        navLocation: 'rented_cars',
                        allCars: allCars,
                        allClients: allClients,
                        validationErrors : err.errors
                    });
                });
            });
        
};

exports.deleteRentedCar = (req, res, next) => {
    const rentedcar_id = req.params.rentedcar_id;

    RentedCarsRepository.deleteRentedCar(rentedcar_id)
    .then( () => {
        res.redirect('/rented_cars');
    });
};

