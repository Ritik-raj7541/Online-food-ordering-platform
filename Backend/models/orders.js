const mongoose = require('mongoose') ;
const orderSchema = mongoose.Schema({
      userEmail : {
            type: String,
            required: true,
            unique: false,
      },
      providerEmail : {
            type: String,
            require: true,
            unique: false,
      },
      orderData : {
            type: Array,
            required: true,
      }
}) ;

module.exports = mongoose.model("Order", orderSchema) ;