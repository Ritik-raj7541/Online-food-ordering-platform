const express = require('express') ;
const router = express.Router() ;
const {postRegister} = require('../../controllers/admin/adminControllers') ;

router.route('/register').post(postRegister) ;

module.exports = router ;