const express = require('express') ;
const connectDB = require('./config/dbConnection');
const dotenv = require("dotenv").config() ;
const cors = require('cors') ;
const bodyParser = require('body-parser');

const app = express() ;

connectDB() ;
app.use(cors()) ; 
app.use(bodyParser.json()) ;
app.use(express.json()) ;
app.use('/api/customer', require('./routes/customerRoutes'));
app.use('/api/admin', require('./routes/adminRoutes')) ;
app.use('/api/admin', require('./routes/adminCRUDRoutes')) ;

app.listen(5000, (req, res)=>{
      console.log('port is running on port 5000');
})