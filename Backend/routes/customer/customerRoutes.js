const express = require('express') ;
const router = express.Router() ;
const {postRegister, postLogin} = require('../../controllers/customer/customerControllers');
const validateToken = require('../../middleware/validateTokenHandler') ;
const {payment} = require('../../controllers/customer/payment') ;

//register gateway
router.route('/register').post(postRegister) ;

//login gateway
router.route('/login').post(postLogin) ;

//payment gateway
router.route('/payment', validateToken).post(payment) ;

module.exports = router ;