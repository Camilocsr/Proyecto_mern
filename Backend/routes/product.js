const express = require('express');
const upload = require('../libs/storage');
const { addProduct,getProducts,deleteProducts } = require('../controllers/productController')
const api = express.Router();

api.post('/products',upload.single('image'), addProduct);
api.get('/products',getProducts);
api.delete('/products/delete/:id', deleteProducts);

module.exports = api;