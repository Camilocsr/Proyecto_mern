const express = require('express');
const upload = require('../libs/storage');
const { addProduct } = require('../controllers/products/addProducts.js')
const { getProducts } = require('../controllers/products/getProducts.js')
const { deleteProducts } = require('../controllers/products/deleteProducts.js')
const { editionProducts } = require('../controllers/products/editProducts.js')
const api = express.Router();

api.post('/products',upload.single('image'), addProduct);
api.get('/products',getProducts);
api.delete('/products/delete/:id', deleteProducts);
api.post('/products/edition/:id', upload.single('image'), editionProducts);

module.exports = api;