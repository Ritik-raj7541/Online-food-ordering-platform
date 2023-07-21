const asyncHandler = require('express-async-handler') ;
const Customer = require('../models/customer') ;
const bcrypt = require('bcrypt') ;
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
      const user = await Customer.findOne({email}) ;
      if(user){
            res.status(400) ;
            throw new Error("User with this email already exist") ;
      }
      //hashing password
      const hashPassword = await bcrypt.hash(password, 10) ;

      const newCustomer = await Customer.create({
            name,
            email,
            password: hashPassword,
      }) ;
      if(newCustomer){
            res.status(201).json({ _id:newCustomer.id, email: newCustomer.email}) ;
      }else{
            res.status(400) ;
            throw new Error("User data not valid") ;
      }
}) ;
//login user
//post method
const postLogin = asyncHandler( async(req, res)=>{
      const {email, password} = req.body ;
      const user = await Customer.findOne({email}) ;
      if(!user){
            res.status(404) ;
            throw new Error("No such email found!") ;
      }
}) ;

module.exports = {getHome, postRegister, postLogin} ;