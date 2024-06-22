const express = require('express');
const {saveSentEmail, getEmails, moveEmailToTrash} = require('../controller/email-controller');

const routes = express.Router();
routes.post('/save', saveSentEmail );
routes.get('/emails/:type',getEmails);
routes.post('/save-draft', saveSentEmail);
routes.post('/trash', moveEmailToTrash);

module.exports = routes;