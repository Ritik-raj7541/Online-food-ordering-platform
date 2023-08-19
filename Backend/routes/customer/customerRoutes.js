const express = require('express') ;
const router = express.Router() ;
const {postRegister, postLogin} = require('../../controllers/customer/customerControllers');

router.route('/register').post(postRegister) ;
router.route('/login').post(postLogin) ;

module.exports = router ;