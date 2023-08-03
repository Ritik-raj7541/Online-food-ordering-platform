const asyncHandler = require('express-async-handler') ;
const foodItem = require('../models/foods/foodItems') ;
const foodCategory = require('../models/foods/foodCategory') ;

//access only to admin
// post - api/admin/add-items
const postItems = asyncHandler(async(req, res) => {
      const {CategoryName, name, img, options, description} = req.body ;
      console.log(req.body);
      if(!CategoryName || !name || !img || !options || !description){
            res.status(400) ;
            throw new Error("All fields are mandatory!!") ;
      }
      const category = await foodCategory.findOne({CategoryName}) ;
      if(!category){
            console.log('creating new cat');
            const newCategory = await foodCategory.create({
                  foodCategory: CategoryName,
            }) ;
      }
      const newItem = await foodItem.create({
            CategoryName,
            name,
            img,
            options,
            description,
      }) ;
      res.status(200).json(newItem) ;
}) ;

//admin access
//delete - api/admin/delete-items/:id
const deleteItems = asyncHandler(async(req, res)=>{
      const itemId = req.params.id ;
      const deletedItem = await foodItem.deleteOne({_id:itemId}) ;
      if(!deletedItem){
            res.status(400) ;
            throw new Error('item not found') ;
      }
      res.status(200).json(deletedItem) ;

}) ;

module.exports = {postItems, deleteItems} ;