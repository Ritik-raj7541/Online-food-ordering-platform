const express = require('express') ;
const router = express.Router() ;
const {getHome, postRegister, postLogin} = require('../controllers/customerControllers');
const { getMenu } = require('../controllers/publicRequestControllers');


router.route('/').get(getHome) ;
router.route('/register').post(postRegister) ;
router.route('/login').post(postLogin) ;


//GET request for displaying the data available in database
router.route('/get-all-data').get(getMenu) ;

module.exports = router ;