const mongoose = require('mongoose') ;
const orderSchema = mongoose.Schema({
      email : {
            type: String,
            required: true,
            unique: true,
      },
      orderData : {
            type: Array,
            required: true,
      }
}) ;

module.exports = mongoose.model("Order", orderSchema) ;