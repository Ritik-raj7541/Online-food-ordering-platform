const asyncHandler = require('express-async-handler') ;
const Admin = require('../../models/CraveMatePartners/RestaurantClients') ;
const bcrypt = require('bcrypt') ;
//post method for registering user

//1. Post
// api/admin/register
const postRegister = asyncHandler (async (req, res) =>{
      const {email, password, restaurantName, restaurantImg, location, star, foodItems} = req.body ;
      if(!restaurantName || !email || !password ||  !location){
            res.status(400) ;
            throw new Error("All fields are mandatory!!") ;
      }
      const resturant = await Admin.findOne({email}) ;
      // console.log(resturant);
      if(resturant){
            res.status(400) ;
            throw new Error("Resturant already exist!!") ;
      }
      const hashPassword = await bcrypt.hash(password, 10) ;
      const newAdmin = await Admin.create({
            email,
            password: hashPassword,
            restaurantName,
            restaurantImg,
            location,
            star,
            foodItems,
      }) ;
      if(newAdmin){
            res.status(200).json({ _id:newAdmin.id, email: newAdmin.email}) ;
      }else{
            res.status(401) ;
            throw new Error("User data not valid") ;
      }


      // res.status(200).json(newAdmin) ;
}) ;

//post method to login user
const postLogin = asyncHandler (async(req, res) =>{
      const {email, password} = req.body ;
      if(!email || !password){
            res.status(400) ;
            throw new Error("All fields are mandatory!") ;
      }
}) ;

module.exports = {postRegister} ;