const express = require('express') ;
const { getMenu } = require('../../controllers/customer/customerCRUDcontrollers');
const validateToken = require('../../middleware/validateTokenHandler');
const router = express.Router() ;

router.route('/getItem', validateToken).get(getMenu) ;

module.exports = router ;