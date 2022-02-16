const express = require('express');
const router = express.Router();
const carApiController = require('../../api/CarAPI');

router.get('/', carApiController.getCars);
router.get('/:car._id', carApiController.getCarById);
router.post('/', carApiController.createCar);
router.put('/:car._id', carApiController.updateCar);
router.delete('/:car._id', carApiController.deleteCar);

module.exports = router;