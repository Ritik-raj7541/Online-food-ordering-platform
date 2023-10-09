const asyncHandler = require('express-async-handler') ;
const bcrypt = require('bcrypt') ;
const jwt = require('jsonwebtoken') ;
const Admin = require('../../models/CraveMatePartners/RestaurantClients') ;
const clients = require('../../models/clients');
//post method for registering user

//1. Post
// api/admin/register
const postRegister = asyncHandler (async (req, res) =>{
      const {restaurantName, email, password, adminKey} = req.body ;
      if(!restaurantName || !email || !password ||  !adminKey){
            res.status(400) ;
            throw new Error("All fields are mandatory!!") ;
      }
      const resturant = await Admin.findOne({email}) ;
      if(resturant){
            res.status(400) ;
            throw new Error("Resturant already exist!!") ;
      }
      const admin = clients.findOne({adminKey}) ;
      if(!admin){
            res.status(400) ;
            throw new Error("No such admin key exist !!") ;
      }
      const hashPassword = await bcrypt.hash(password, 10) ;
      const newAdmin = await Admin.create({
            restaurantName,
            email,
            password: hashPassword,
            adminKey:adminKey,
      }) ;
      if(newAdmin){
            res.status(200).json({ _id:newAdmin.id, email: newAdmin.email}) ;
      }else{
            res.status(401) ;
            throw new Error("User data not valid") ;
      }

}) ;

//Post method to login user
//2. api/admin/login

const postLogin = asyncHandler (async(req, res) =>{
      const {email, password} = req.body ;
      if(!email || !password){
            res.status(400) ;
            throw new Error("All fields are mandatory!") ;
      }
      const admin = await Admin.findOne({email}) ;
      if(admin && (await bcrypt.compare(password, admin.password))){
            const accessToken = jwt.sign({
                  admin: {
                        id: admin.id,
                  }
            },
            process.env.SECERET_ACCESS_TOKEN,
            {expiresIn:"1m"}
            ) ;
            const response = {
                  id: admin.id,
                  accessToken,
            }
            res.status(200).json({response}) ;
      }else{
            res.status(401) ;
            throw new Error("Not a valid Admin") ;
      }
}) ;

module.exports = {postRegister, postLogin} ;