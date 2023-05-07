const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRoutes = require('./routes/product')

app = express();// creo la app express.

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));// esto parsea a un objeto js
app.use(bodyParser.json())

app.use('/public',express.static(`${__dirname}/storage/imgs`))

app.use('/v1',productsRoutes)

module.exports = app;