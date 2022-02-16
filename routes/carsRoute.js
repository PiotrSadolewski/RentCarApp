const express = require('express');
const router = express.Router();
const carsControler = require('../controllers/carsController');

router.get('/', carsControler.showCarsList);
router.get('/add', carsControler.showAddCarForm);
router.get('/edit/:car_id', carsControler.showCarEditForm);
router.get('/details/:car_id', carsControler.showCarDetails);
router.post('/add', carsControler.addCar);
router.post('/edit', carsControler.updateCar);
router.get('/delete/:car_id', carsControler.deleteCar);

module.exports = router;