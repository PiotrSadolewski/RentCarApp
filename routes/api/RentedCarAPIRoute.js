const express = require('express');
const router = express.Router();
const rentedCarApiController = require('../../api/RentedCatAPI');

router.get('/', rentedCarApiController.getRentedCars);
router.get('/:rentedcar_id', rentedCarApiController.getRentedCarById);
router.post('/', rentedCarApiController.createRentedCar);
router.put('/:rentedcar_id', rentedCarApiController.updateRentedCar);
router.delete('/:rentedcar_id', rentedCarApiController.deleteRentedCar);

module.exports = router;