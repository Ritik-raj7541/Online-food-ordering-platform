const asyncHandler = require('express-async-handler') ;
const Admin = require('../../models/admin') ;

//post method for registering user
const postRegister = asyncHandler (async (req, res) =>{
      const {name, email, password, adminId} = req.body ;
      if(!name || !email || !password || !adminId){
            res.status(400) ;
            throw new Error("All fields are mandatory!!") ;
      }
      const newAdmin = await Admin.create({
            name,
            email,
            password,
            adminId,
      })
      res.status(200).json(newAdmin) ;
}) ;

module.exports = {postRegister} ;