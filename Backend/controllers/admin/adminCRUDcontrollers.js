const asyncHandler = require('express-async-handler') ;
const foodItem = require('../../models/foods/foodItems') ;
const foodCategory = require('../../models/foods/foodCategory') ;

//1.
//GET - api/admin/get-all-items
const getFoodItems = asyncHandler(async(req, res) =>{
      const allFood = await foodItem.find({}) ;
      res.status(200).json(allFood) ;
}) ;
//2.
//GET - api/admin/get-all-category
const getCategory = asyncHandler(async(req, res) =>{
      const allCategory = await foodCategory.find() ;
      res.status(200).json(allCategory) ;
}) ;
//3.
//POST - api/admin/add-items
const postItems = asyncHandler(async(req, res) => {
      const {CategoryName, name, img, options, description} = req.body ;
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

//4.
//DELETE - api/admin/delete-items/:id
const deleteItems = asyncHandler(async(req, res)=>{
      const itemId = req.params.id ;
      const deletedItem = await foodItem.deleteOne({_id:itemId}) ;
      if(!deletedItem){
            res.status(400) ;
            throw new Error('item not found') ;
      }
      res.status(200).json(deletedItem) ;

}) ;

//5.
//PUT - api/admin/update-items/:id
const updateItem = asyncHandler(async(req, res)=>{const itemId = req.params.id ;
      const item = await foodItem.findOne({_id:itemId}) ;
      if(!item){
            res.status(400);
            throw new Error('product not found') ;
      }
      const updatedItem = await foodItem.findByIdAndUpdate({_id: itemId}, req.body,{new:true}) ;
      res.status(200).json(updatedItem) ;
}) ;
module.exports = {postItems, 
                  deleteItems, 
                  getFoodItems, 
                  getCategory, 
                  updateItem
            } ;