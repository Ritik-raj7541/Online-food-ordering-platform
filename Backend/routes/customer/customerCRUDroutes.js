const express = require('express') ;
const { getRestaurant, getMenu, checkOut , myDetails, search} = require('../../controllers/customer/customerCRUDcontrollers');
const validateToken = require('../../middleware/validateTokenHandler');
const router = express.Router() ;

router.route('/get-restaurants').get(getRestaurant) ;
router.route('/get-item', validateToken).post(getMenu) ;
router.route('/check-out', validateToken).post(checkOut) ;
router.route('/get-my-details', validateToken).post(myDetails) ;
router.route('/search', validateToken).post(search) ;

module.exports = router ;