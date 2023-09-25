const mongoose = require("mongoose") ;

const restaurantSchema = mongoose.Schema({
      email:{
            type:String,
            required:true,
      },
      password:{
            type:String,
            required:true,
      },
      restaurantName:{
            type:String,
            required:true,
      },
      restaurantImg: {
            type:String,
            required:true,
      },
      location:{
            type:String,
            required:true,
      },
      star:{
            type:Number,
            required:true,
      },
      foodItems:[
            {
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
                              // required: true,
                        },
                        full:{
                              type:Number,
                              // required: true,
                        },
                        regular:{
                              type:Number,
                              // required: true,
                        },
                        medium:{
                              type:Number,
                              // required: true,
                        },
                        large:{
                              type:Number,
                              // required: true,
                        }
                  }],
                  description:{
                        type:String,
                        required: true,
                  },
            }
      ],
      orders:{
            type: Array,
            required: true,
      }

}) ;

module.exports = mongoose.model("ResturantSchema", restaurantSchema) ;