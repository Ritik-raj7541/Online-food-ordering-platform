const mongoose = require('mongoose') ;
const orderSchema = mongoose.Schema({
      userEmail : {
            type: String,
            required: true,
            unique: true,
      },
      providerEmail : {
            type: String,
            require: true,
            uniqu: true,
      },
      orderData : {
            type: Array,
            required: true,
      }
}) ;

module.exports = mongoose.model("Order", orderSchema) ;