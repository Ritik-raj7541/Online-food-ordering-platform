const mongoose = require('mongoose') ;

const clientSchema = mongoose.Schema({
      adminKey:{
            type: String,
      }
}) ;

module.exports = mongoose.model("Client", customerSchema) ;