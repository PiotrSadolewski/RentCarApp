const ClientRepository = require("../repository/sequelize/ClientRepository");

exports.showClientList = (req, res, next) => {
    ClientRepository.getClients()
        .then(clients =>{
            res.render('pages/clients/list', {
                validationErrors: [],
                Clients: clients,
                navLocation: 'clients'
            })
        })
}

exports.showAddClientForm = (req, res, next) => {
    res.render('pages/clients/form', {
        validationErrors: [],
        Client: {},
        pageTitle: 'Nowy Klient',
        formMode: 'createNew',
        btnLabel: 'Dodaj Klienta',
        formAction: '/clients/add',
        navLocation: 'clients'
    });
}

exports.showClientDetails = (req, res, next) => {
    const client_id = req.params.client_id;
    ClientRepository.getClientsById(client_id)
        .then(client =>{
            res.render('pages/clients/form', {
                validationErrors: [],
                Client: client,
                pageTitle: 'Szczegóły klienta',
                formMode: 'showDetails',
                btnLabel: 'Edytuj klienta',
                formAction: '',
                navLocation: 'clients'
            });
        });
}

exports.showClientEditForm = (req, res, next) => {
    const client_id = req.params.client_id;
    ClientRepository.getClientsById(client_id)
        .then(client =>{
            res.render('pages/clients/form', {
                validationErrors: [],
                Client: client,
                pageTitle: 'Edycja klienta',
                formMode: 'edit',
                btnLabel: 'Edytuj klienta',
                formAction: '/clients/edit',
                navLocation: 'clients'
            });
        });
}

exports.addClient = (req, res, next) => {
    const clientData = { ...req.body };
    ClientRepository.createClient(clientData)
        .then( result => {
            res.redirect('/clients');
        })
        .catch(err =>{
            res.render('pages/clients/form', {
                Client : clientData,
                pageTitle: 'Nowy Klient',
                formMode: 'createNew',
                btnLabel: 'Dodaj Klienta',
                formAction: '/clients/add',
                navLocation: 'clients',
                validationErrors : err.errors
            });
        });
};

exports.updateClient = (req, res, next) => {
    const client_id = req.body._id;
    const clientData = { ...req.body };
    ClientRepository.updateClient(client_id, clientData)
        .then( result => {
            res.redirect('/clients');
        })
        .catch(err =>{
            res.render('pages/clients/form', {
                Client : clientData,
                pageTitle: 'Edycja klienta',
                formMode: 'edit',
                btnLabel: 'Edytuj klienta',
                formAction: '/clients/edit',
                navLocation: 'clients',
                validationErrors : err.errors
            });
        });
};

exports.deleteClient = (req, res, next) => {
    const client_id = req.params.client_id;

    ClientRepository.deleteClient(client_id)
    .then( () => {
        res.redirect('/clients');
    });
};

