const express = require('express') ;
const router = express.Router() ;
const {postRegister, postLogin} = require('../../controllers/admin/adminControllers') ;

router.route('/register').post(postRegister) ;
router.route('/login').post(postLogin) ;

module.exports = router ;