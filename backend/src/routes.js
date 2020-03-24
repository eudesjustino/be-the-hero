const express = require('express');
const routes = express.Router();
const Ongcontroller = require('../src/controllers/OngController');
const IncidentController = require('../src/controllers/IncidentController');
const ProfileController = require('../src/controllers/ProfileController');
const SessionController = require('../src/controllers/SessionController');

routes.post('/session',SessionController.create);

routes.get('/ongs',Ongcontroller.index);

routes.post('/ongs',Ongcontroller.create);

routes.get('/profile',ProfileController.index);

routes.get('/incidents',IncidentController.index);

routes.post('/incidents',IncidentController.create);

routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;