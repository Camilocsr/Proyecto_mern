const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRoutes = require('./routes/product');
const adminRoutes = require('./routes/admin');
const delivery = require('./routes/productsDelvery');
const clients = require('./routes/clients');
const orders = require('./routes/order');

app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use('/public',express.static(`${__dirname}/storage/imgs`));
app.use('/v1',productsRoutes);
app.use('/v1',adminRoutes);
app.use('/v1',clients);
app.use('/v1',delivery);
app.use('/v1',orders);

module.exports = app;