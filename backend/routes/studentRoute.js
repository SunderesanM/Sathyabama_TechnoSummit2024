const studentController = require('../controllers/studentController');
const express = require('express');

// create the router 
const studentRouter = express.Router(); 

// setup the routes 
// 1. registration 
studentRouter.post('/register' , studentController.register);

// export the router 
module.exports = studentRouter;