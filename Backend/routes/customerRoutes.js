const express = require('express') ;
const router = express.Router() ;
const {getHome, postRegister} = require('../controllers/customerControllers')

router.route('/').get(getHome) ;
router.route('/register').post(postRegister) ;

module.exports = router ;