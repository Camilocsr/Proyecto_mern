const express = require('express');
const { addAdmin } = require('../controllers/admins/addAdmin.js');
const { getAdmin } = require('../controllers/admins/getAdmins.js');
const { authenticateAdmin } = require('../controllers/admins/auth.js');
const api = express.Router();

api.post('/Admins', addAdmin)
api.get('/Admins',getAdmin)
api.post('/admins/login',authenticateAdmin)

module.exports = api;