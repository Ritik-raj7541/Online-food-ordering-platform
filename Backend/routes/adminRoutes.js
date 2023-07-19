const express = require('express') ;
const routes = express.Router() ;
const {getHome} = require('../controllers/customerControllers') ;
const {postRegister} = require('../controllers/adminControllers') ;

routes.route('/').get(getHome) ;
routes.route('/register').post(postRegister) ;

module.exports = routes ;