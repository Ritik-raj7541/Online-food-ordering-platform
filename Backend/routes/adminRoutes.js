const express = require('express') ;
const router = express.Router() ;
const {postRegister} = require('../controllers/adminControllers') ;

router.route('/register').post(postRegister) ;

module.exports = router ;