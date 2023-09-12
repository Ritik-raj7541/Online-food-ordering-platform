const asyncHandler = require('express-async-handler') ;
const stripe = require('stripe')(process.env.SECERET_PAYMENT_KEY) ;


//1. api/customer/payment
//POST 
const payment = asyncHandler( async(req, res) => {
      const {amount} = req.body ;
      const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency:'inr',
      }) ;
      res.json({clientSecret: paymentIntent.client_secret }) ;
}) ;

module.exports = {payment} ;