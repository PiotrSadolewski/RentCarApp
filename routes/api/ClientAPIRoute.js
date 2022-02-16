const express = require('express');
const router = express.Router();
const clientApiController = require('../../api/ClientAPI');

router.get('/', clientApiController.getClients);
router.get('/:client._id', clientApiController.getClientById);
router.post('/', clientApiController.createClient);
router.put('/:client._id', clientApiController.updateClient);
router.delete('/:client._id', clientApiController.deleteClient);

module.exports = router;