//here we have all the request generated by both user and admin

const asyncHandler = require('express-async-handler') ;

const getMenu = asyncHandler (async (req, res) =>{

      res.status(200).json({message:"we are giving all the items"}) ;
});

module.exports = {getMenu} ;