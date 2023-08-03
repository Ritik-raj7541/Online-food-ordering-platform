const express = require('express') ;
const router = express.Router() ;
const {postRegister, postLogin} = require('../controllers/customerControllers');

router.route('/register').post(postRegister) ;
router.route('/login').post(postLogin) ;

module.exports = router ;