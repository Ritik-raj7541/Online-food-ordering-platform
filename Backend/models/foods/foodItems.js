const mongoose = require('mongoose') ;

const foodItemSchema = mongoose.Schema({
      CategoryName:{
            type:String,
            required: true,
      },
      name:{
            type:String,
            required: true,
      },
      img:{
            type:String,
            required: true,
      },
      options:[{
            half:{
                  type:Number,
                  required: true,
            },
            full:{
                  type:Number,
                  required: true,
            }
      }],
      description:{
            type:String,
            required: true,
      },
}) ;

module.exports = mongoose.model("FoodItem", foodItemSchema) ;