const express = require('express') ;
const { getMenu, checkOut } = require('../../controllers/customer/customerCRUDcontrollers');
const validateToken = require('../../middleware/validateTokenHandler');
const router = express.Router() ;

router.route('/get-item', validateToken).get(getMenu) ;
router.route('/check-out', validateToken).post(checkOut) ;

module.exports = router ;