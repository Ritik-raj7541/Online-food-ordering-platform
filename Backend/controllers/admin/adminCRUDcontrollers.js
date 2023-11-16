const asyncHandler = require('express-async-handler') ;
const foodItem = require('../../models/foods/foodItems') ;
const foodCategory = require('../../models/foods/foodCategory') ;
const Admin = require('../../models/CraveMatePartners/RestaurantClients') ;
const RestaurantClients = require('../../models/CraveMatePartners/RestaurantClients');
const orders = require('../../models/orders');
//1.
//GET - api/admin/get-all-items
const getFoodItems = asyncHandler(async(req, res) =>{
      const adminId = req.params.id ;
      const admin = await Admin.findById(adminId) ;
      res.status(200).json(admin.foodItems) ;
}) ;
//2.
//GET - api/admin/get-all-category
// STOPPED
const getCategory = asyncHandler(async(req, res) =>{
      const allCategory = await foodCategory.find() ;
      res.status(200).json(allCategory) ;
}) ;
//3.
//POST - api/admin/add-items
const postItems = asyncHandler(async(req, res) => {
      //take value in object from frontend
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
      const newItem = {
            CategoryName,
            name,
            img,
            options,
            description,
      } ;
      const adminId = req.params.id ;
      const updatedAdmin = await Admin.findOneAndUpdate(
            {_id: adminId},
            {$push: {foodItems: newItem}},
            {new: true} ,
      ) ;
      if(updatedAdmin){
            res.status(200).json(newItem) ;
      }else{
            res.status(400) ;
            throw new Error("Not able to update") ;
      }
}) ;

//4.
//DELETE - api/admin/delete-items/:id/:itemId
const deleteItems = asyncHandler(async(req, res)=>{
      const adminId = req.params.id ;
      const itemId = req.params.itemId ;
      const deletedItem = await Admin.findOneAndUpdate(
            {_id:adminId},
            { $pull: {foodItems: {_id: itemId}}},
            {new: true},
            ) ;
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

//6.
//GET /api/customer/update-orders/:resEmail/:custEmail 
const updateOrder = asyncHandler( async(req, res)=>{
      const providerEmail = req.params.resEmail ;
      const customerEmail = req.params.custEmail ;
      const updatedRest = await RestaurantClients.findOneAndUpdate(
            {email: providerEmail},
            { $pull: {orders: {userEmail: customerEmail}}},
            {new: true},
      ) ;
            // console.log(providerEmail, customerEmail);
      const updateOrder = await orders.findOneAndUpdate(
            {userEmail: customerEmail,
             providerEmail: providerEmail,
             'orderData.status': "ordered"
            },
            { $set: {'orderData.$[].status': "Delevered"}}
      )
      res.status(200).json(updateOrder) ;
}) ;
module.exports = {postItems, 
                  deleteItems, 
                  getFoodItems, 
                  updateItem,
                  updateOrder
            } ;