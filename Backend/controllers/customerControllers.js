const asyncHandler = require('express-async-handler') ;
const Customer = require('../models/customer') 
//get methods
const getHome = asyncHandler (async (req, res) =>{
      res.status(200).json({message:"it is good"}) ;
});

//post method for registering user
const postRegister = asyncHandler (async (req, res) =>{
      const {name, email, password} = req.body ;
      if(!name || !email || !password){
            res.status(400) ;
            throw new Error("All fields are mandatory!!") ;
      }
      const newCustomer = await Customer.create({
            name,
            email,
            password,
      }) ;
      res.status(200).json(newCustomer) ;
}) ;

module.exports = {getHome, postRegister} ;