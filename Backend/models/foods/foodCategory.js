const mongoose = require('mongoose') ;

const categorySchema = mongoose.Schema({
      foodCategory :{
            type:String,
            required: true,
      }
}) ;

module.exports = mongoose.model("Foodcategory", categorySchema) ;