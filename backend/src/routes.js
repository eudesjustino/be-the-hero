const express = require('express');
const {celebrate,Segments,Joi}  = require('celebrate');

const routes = express.Router();
const Ongcontroller = require('../src/controllers/OngController');
const IncidentController = require('../src/controllers/IncidentController');
const ProfileController = require('../src/controllers/ProfileController');
const SessionController = require('../src/controllers/SessionController');

routes.post('/session',SessionController.create);

routes.get('/ongs',Ongcontroller.index);

routes.post('/ongs',celebrate({
 [Segments.BODY]:Joi.object().keys({
     name:Joi.string().required(),
     email:Joi.string().required().email(),
     whatsapp:Joi.number().required().min(10).max(11),
     city:Joi.string().required(),
     uf:Joi.string().required().length(2)
 })   
}),Ongcontroller.create);

routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization:Joi.string().required()
    }).unknown()
}),ProfileController.index);

routes.get('/incidents',celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page:Joi.number()
    })
}),IncidentController.index);

routes.post('/incidents',IncidentController.create);

routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id:Joi.number().required()
    })
}),IncidentController.delete);

module.exports = routes;