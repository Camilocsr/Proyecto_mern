const express = require('express')
app = express();// creo la app express.
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/product')

app.use(bodyParser.urlencoded({extended:false}));// esto parsea a un objeto js
app.use(bodyParser.json())

app.use('/public',express.static(`${__dirname}/storage/imgs`))

app.use('/v1',productsRoutes)

module.exports = app;