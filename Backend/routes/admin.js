const express = require('express');
const { addAdmin,getAdmin,authenticateAdmin } = require('../controllers/adminController');
const api = express.Router();

api.post('/Admins', addAdmin);
api.get('/Admins',getAdmin)
api.post('/admins/login',authenticateAdmin);

module.exports = api;