const express = require('express');
const { addClient } = require('../controllers/client/addClient.js');
const { getClient } = require('../controllers/client/getclient.js');
const { deleteClient } = require('../controllers/client/deleteClients.js');
const api = express.Router();

api.post('/Client', addClient)
api.get('/Client',getClient)
api.delete('/Client/delete/:id',deleteClient)

module.exports = api;