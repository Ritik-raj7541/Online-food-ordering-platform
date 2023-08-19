const asyncHandler = require('express-async-handler') ;
const Customer = require('../../models/customer') ;
const bcrypt = require('bcrypt') ;
const jwt = require('jsonwebtoken') ;

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
      if(!email || !password){
            res.status(400) ;
            throw new Error("All fields are mandatory!") ;
      }
      const user = await Customer.findOne({email}) ;
      if(user && (await bcrypt.compare(password, user.password))){
            const accessToken = jwt.sign({
                  user:{
                        id: user.id,
                  }
            },
            process.env.SECERET_ACCESS_TOKEN,
            {expiresIn:"5m"}
            ) ;
            res.status(200).json({accessToken}) ;
      }else{
            res.status(400) ;
            throw new Error('email or password is not valid') ;
      }
}) ;

module.exports = {postRegister, postLogin} ;