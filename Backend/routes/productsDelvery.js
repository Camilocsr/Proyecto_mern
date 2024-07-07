const express = require('express');
const { addProductForDelivery } = require('../controllers/products/productsWthDelivery/addProductsDelivery.js');
const api = express.Router();

api.post('/Delivery', addProductForDelivery)

module.exports = api;