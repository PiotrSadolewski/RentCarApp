const express = require('express');
const router = express.Router();
const clientsControler = require('../controllers/clientsController');

router.get('/', clientsControler.showClientList);
router.get('/add', clientsControler.showAddClientForm);
router.get('/edit/:client_id', clientsControler.showClientEditForm);
router.get('/details/:client_id', clientsControler.showClientDetails);
router.post('/add', clientsControler.addClient);
router.post('/edit', clientsControler.updateClient);
router.get('/delete/:client_id', clientsControler.deleteClient);

module.exports = router;