const asyncHandler = require('express-async-handler') ;
const foodItems = require('../../models/foods/foodItems') ;
const foodCategorys = require('../../models/foods/foodCategory') ;
//1.
//GET - api/customer/getItem
const getMenu = asyncHandler (async (req, res) =>{
      const foodCat = await foodCategorys.find() ;
      // let allFood = [];
      let foodUnderCat = {} ;
      for (let index = 0; index < foodCat.length; index++) {
            const element = foodCat[index];
            const CategoryOfFood = element.CategoryName ;
            const foodItem = await foodItems.find({CategoryName: CategoryOfFood}) 
            
            foodUnderCat[CategoryOfFood] = foodUnderCat[CategoryOfFood] || [] ;
            foodUnderCat[CategoryOfFood].push(foodItem) ;
      }
      res.status(200).json(foodUnderCat) ;
});

module.exports = {getMenu} ;