const express = require('express');
const { addAdmin,getAdmin } = require('../controllers/adminController');
const api = express.Router();

api.post('/Admins', addAdmin);
api.get('/Admins',getAdmin)

module.exports = api;