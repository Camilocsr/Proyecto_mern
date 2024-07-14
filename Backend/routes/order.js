const express = require('express');
const { addOrder } = require('../controllers/orders/addOrder.js');
// const { get } = require('../controllers/orders/getOrder.js');
// const { deleteClient } = require('../controllers/client/deleteClients.js');
const api = express.Router();

api.post('/Order', addOrder)
// api.get('/Order',getClient)
// api.delete('/Order/delete/:id',deleteClient)

module.exports = api;