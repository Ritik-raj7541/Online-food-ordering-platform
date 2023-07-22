const express = require('express') ;
const router = express.Router() ;
const {getHome, postRegister, postLogin} = require('../controllers/customerControllers')

router.route('/').get(getHome) ;
router.route('/register').post(postRegister) ;
router.route('/login').post(postLogin)

module.exports = router ;