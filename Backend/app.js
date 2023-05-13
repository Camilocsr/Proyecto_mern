const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRoutes = require('./routes/product');
const adminRoutes = require('./routes/admin');

app = express();// creo la app express.

app.use(cors());// permitir protocolos http desde apps externas.

app.use(bodyParser.urlencoded({extended:false}));// esto parsea a un objeto js
app.use(bodyParser.json())

app.use('/public',express.static(`${__dirname}/storage/imgs`));//direccion falsa la cual le aparecera al cliente.
app.use('/v1',productsRoutes);
app.use('/v1',adminRoutes);

module.exports = app;