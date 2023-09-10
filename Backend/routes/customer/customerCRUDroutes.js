const express = require('express') ;
const { getMenu, checkOut , myDetails, search} = require('../../controllers/customer/customerCRUDcontrollers');
const validateToken = require('../../middleware/validateTokenHandler');
const router = express.Router() ;

router.route('/get-item', validateToken).get(getMenu) ;
router.route('/check-out', validateToken).post(checkOut) ;
router.route('/get-my-details', validateToken).post(myDetails) ;
router.route('/search', validateToken).post(search) ;

module.exports = router ;