const express = require('express');
const routes = express.Router();
const connection = require('./database/connection');

const OngController = require ('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionsController = require('./controllers/SessionsController');

// rotas Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// rotas Incidents
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

// rotas casos específicos
routes.get('/profileController', ProfileController.index);

// rota login
routes.post('/sessions', SessionsController.create);



module.exports = routes;