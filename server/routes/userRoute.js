const express = require('express');
const route = express.Router();
const { addUser, login } = require('../controllers/userController')

route.post('/adduser', addUser);
route.post('/login', login);

module.exports = route;