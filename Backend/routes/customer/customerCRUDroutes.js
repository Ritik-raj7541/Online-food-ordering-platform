const express = require('express') ;
const { getSpecificRestaurant, getRestaurant, getMenu, checkOut , myDetails, search} = require('../../controllers/customer/customerCRUDcontrollers');
const validateToken = require('../../middleware/validateTokenHandler');
const router = express.Router() ;

router.route('/get-restaurants').get(getRestaurant) ;
router.route('/get-specific-restaurants/:id').get(getSpecificRestaurant) ;
router.route('/get-item/:id', validateToken).get(getMenu) ;
router.route('/get-my-details/:email', validateToken).get(myDetails) ;
router.route('/check-out', validateToken).post(checkOut) ;
router.route('/search', validateToken).post(search) ;

module.exports = router ;