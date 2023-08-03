const asyncHandler = require('express-async-handler') ;
const foodItem = require('../models/foods/foodItems') ;
const foodCategory = require('../models/foods/foodCategory') ;
//1.
//GET - api/customer/getItem
const getMenu = asyncHandler (async (req, res) =>{
      

      res.status(200).json({message:"we are giving all the items"}) ;
});

module.exports = {getMenu} ;