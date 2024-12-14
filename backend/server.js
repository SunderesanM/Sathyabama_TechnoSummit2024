const express = require("express");
const cors = require("cors");
const db = require("./config/db.config");
const dotenv = require("dotenv");
const studentRoute = require('./routes/studentRoute');
const departmentInchargeRoute = require('./routes/departmentInchargeRoute');
const eventCoordinatorRoute = require('./routes/eventCoordinatorRoute');

dotenv.config();

// creating the express app 
const app = express();
const port = process.env.port || 5000;

// Setting up middlewares
const corsOptions = {
  origin: '*', // Replace with your Vercel frontend URL (remove trailing slash)
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// setting up the routes 
app.use('/student' , studentRoute);
app.use('/departmentIncharge' ,departmentInchargeRoute);
app.use('/eventCoordinator' ,eventCoordinatorRoute);

// starting the server 
app.listen(port , () => {console.log("Server started at port" , port)});
