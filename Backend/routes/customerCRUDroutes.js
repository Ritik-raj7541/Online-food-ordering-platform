const express = require('express') ;
const { getMenu } = require('../controllers/customer/customerCRUDcontrollers');
const router = express.Router() ;

router.route('/getItem').get(getMenu) ;

module.exports = router