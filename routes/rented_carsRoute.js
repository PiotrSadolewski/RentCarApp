const express = require('express');
const router = express.Router();
const rented_carsControler = require('../controllers/rented_carsController');

router.get('/', rented_carsControler.showRentedCarsList);
router.get('/add', rented_carsControler.showAddRentedCarForm);
router.get('/details/:rentedcar_id', rented_carsControler.showRentedCarDetails);
router.get('/edit/:rentedcar_id', rented_carsControler.showRentedCarEditForm);
router.post('/add', rented_carsControler.addRentedCar);
router.post('/edit', rented_carsControler.updateRentedCar);
router.get('/delete/:rentedcar_id', rented_carsControler.deleteRentedCar);


module.exports = router;