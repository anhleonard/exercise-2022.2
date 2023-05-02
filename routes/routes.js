const express = require('express');
const mainRoute = express.Router();
const blogController = require('../controllers/blogController.js');

mainRoute.get('/', blogController.comeToBlog);
mainRoute.post('/create', blogController.createBlog);

module.exports = mainRoute;

