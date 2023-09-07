const asyncHandler = require('express-async-handler') ;
const foodItems = require('../../models/foods/foodItems') ;
const foodCategorys = require('../../models/foods/foodCategory') ;
const Orders = require('../../models/orders') ;
const User = require('../../models/customer') ;
//1.
//GET - api/customer/get-item
const getMenu = asyncHandler (async (req, res) =>{
      const foodCat = await foodCategorys.find() ;
      let foodUnderCat = {} ;
      
      for (let index = 0; index < foodCat.length; index++) {
            const element = foodCat[index];
            const CategoryOfFood = element.CategoryName ;
            const foodItem = await foodItems.find({CategoryName: CategoryOfFood}) 
            foodUnderCat[CategoryOfFood] = foodUnderCat[CategoryOfFood] || [] ;
            foodUnderCat[CategoryOfFood] = foodItem ;
      }
      let finalData = Object.entries(foodUnderCat) ;

      res.status(200).json(finalData) ;
});

//2.
//POST - api/customer/check-out

const checkOut = asyncHandler(async (req, res) => {
      const {email, cart} = req.body ;
      //find if the user exist
      const user = await Orders.findOne({email}) ;
      if(user){
            //update
            const updatedOrder = await Orders.findOneAndUpdate({email: user.email},
                  { $push: {orderData: cart}}) ;
            if(updatedOrder){
                  res.status(200).json({message:"order updated"})
            }else{
                  res.status(400) ;
                  throw new Error("not able to update order") ;
            }
      }else{
            //create
            const newOrder = await Orders.create({
                  email: email,
                  orderData: [cart],
            }) ;
            if(newOrder){
                  res.status(200).json({message:"new order placed"})
            }else{
                  res.status(400) ;
                  throw new Error("not able to place order") ;
            }
      }


}) ;

// 3. to get user profile .
//GET - api/customer/get-my-details
const myDetails = asyncHandler( async(req, res) =>{
      const {email} = req.body ;
      // console.log("email -> ",email);
      const user = await User.findOne({email}) ;
      const orders = await Orders.findOne({email}) ;
      // console.log(orders.orderData);
      // let orderHistory = [];
      let userCompleteDetails = {
            name: user.name,
            address:"",
            orderHistory:[],
      }
      if(orders){
            userCompleteDetails = {
                  name: user.name,
                  address:"",
                  orderHistory: orders.orderData,
            }  
      }
      if(user){
            res.status(200).json(userCompleteDetails) ;
      }else{
            // res.status(400).json({message:"No user Found"}) ;
      }
      
}) ;

module.exports = {getMenu, checkOut, myDetails} ;