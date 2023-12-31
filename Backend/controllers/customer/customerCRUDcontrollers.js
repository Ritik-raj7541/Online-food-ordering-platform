const asyncHandler = require("express-async-handler");
// const foodItems = require("../../models/foods/foodItems");
const foodCategorys = require("../../models/foods/foodCategory");
const Orders = require("../../models/orders");
const User = require("../../models/customer");
const RestaurantClients = require("../../models/CraveMatePartners/RestaurantClients");

//0.
//GET - api/customer/get-restaurants
const getRestaurant = asyncHandler(async (req, res) => {
  const restaurants = await RestaurantClients.find();
  res.status(200).json(restaurants);
});

//1.
//GET -api/customer/get-specific-restaurants
const getSpecificRestaurant = asyncHandler(async (req, res) => {
  const restaurantId = req.params.id;
  const restaurant = await RestaurantClients.findById(restaurantId);
  res.status(200).json(restaurant);
});
//2.
//GET - api/customer/get-item
const getMenu = asyncHandler(async (req, res) => {
  const foodCat = await foodCategorys.find();
  let foodUnderCat = {};
  const restaurantId = req.params.id;
  const restaurant = await RestaurantClients.findById(restaurantId);

  for (let index = 0; index < foodCat.length; index++) {
    const element = foodCat[index];
    const CategoryOfFood = element.CategoryName;
    const foodItem = await restaurant.foodItems.filter(
      (item) => item.CategoryName === CategoryOfFood
    );

    foodUnderCat[CategoryOfFood] = foodUnderCat[CategoryOfFood] || [];
    foodUnderCat[CategoryOfFood] = foodItem;
  }
  let finalData = Object.entries(foodUnderCat);
  res.status(200).json(finalData);
});

//3.
//POST - api/customer/check-out

const checkOut = asyncHandler(async (req, res) => {
  const { customerEmail, providerEmail, cart } = req.body;
  const statusCart = {
    cart,
    status: "ordered",
  };
  const order = await Orders.findOne({ userEmail: customerEmail, providerEmail: providerEmail });
  const newOrder = {
    userEmail: customerEmail,
    orderData: [statusCart],
  };
  const restaurant = await RestaurantClients.findOne({email: providerEmail}) ;
  // console.log(restaurant.orders); 
  const userOrder = await restaurant.orders.find(o => o.userEmail === customerEmail) ;
  // console.log(userOrder);
  if (userOrder) {
    const update = { $push: { orderData: statusCart } };
    const provider = await RestaurantClients.findOneAndUpdate(
      {email: providerEmail, "orders.userEmail": customerEmail},
      { $push: { 'orders.$[elem].orderData': statusCart } },
      { arrayFilters: [{ 'elem.userEmail': customerEmail }] }, 
       {
        new: true,
        useFindAndModify: false,
      }) ;
    // console.log("present");
  } else {
    const provider = await RestaurantClients.findOneAndUpdate(
      { email: providerEmail },
      { $push: { orders: newOrder } },
      { new: true, useFindAndModify: false }
    );
    // console.log("not present");
  }

  //for user
  if (order) {
    const filter = {
      userEmail: customerEmail,
      providerEmail: providerEmail,
    };
    const update = { $push: { orderData: statusCart } };
    const updatedOrder = await Orders.findOneAndUpdate(filter, update, {
      new: true,
      useFindAndModify: false,
    });
    if (updatedOrder) {
      res.status(200).json({ message: "order updated" });
    } else {
      res.status(400);
      throw new Error("not able to update order");
    }
  } else {
    const newOrder = await Orders.create({
      userEmail: customerEmail,
      providerEmail: providerEmail,
      orderData: [statusCart],
    });
    if (newOrder) {
      res.status(200).json({ message: "new order placed" });
    } else {
      res.status(400);
      throw new Error("not able to place order");
    }
  }
});

// 4. to get user profile .
//GET - api/customer/get-my-details
const myDetails = asyncHandler(async (req, res) => {
  const email = req.params.email;
  // console.log("email -> ",email);
  const user = await User.findOne({ email });
  const orders = await Orders.findOne({ userEmail: email });

  let userCompleteDetails = {
    name: user.name,
    address: "",
    orderHistory: [],
  };
  if (orders) {
    userCompleteDetails = {
      name: user.name,
      address: "",
      orderHistory: orders.orderData,
    };
  }
  if (user) {
    res.status(200).json(userCompleteDetails);
  } else {
    // res.status(400).json({message:"No user Found"}) ;
  }
});

//5. for searching food
//POST - api/customer/search
const search = asyncHandler(async (req, res) => {
  const { query } = req.body;
  const restaurantId = req.params.id;
  const restaurant = await RestaurantClients.findById(restaurantId);
  const foodItems = restaurant.foodItems;
  if (query.length > 0 && foodItems.length > 0) {
    const results = foodItems.filter((foodItem) => {
      return (
        foodItem.name.match(new RegExp(query, "i")) ||
        foodItem.CategoryName.match(new RegExp(query, "i"))
      );
    });
    if (results) {
      res.status(200).json(results);
    } else {
      res.status(400);
      throw new Error("not able to place order");
    }
  } else {
    // console.log("not found");
    res.status(200).json("");
  }
});

module.exports = {
  getSpecificRestaurant,
  getRestaurant,
  getMenu,
  checkOut,
  myDetails,
  search,
};
