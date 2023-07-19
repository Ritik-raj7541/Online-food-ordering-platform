const asyncHandler = require('express-async-handler') ;
//get methods
const getHome = asyncHandler (async (req, res) =>{
      res.status(200).json({message:"it is good"}) ;
});

module.exports = {getHome} ;