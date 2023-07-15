const express = require('express') ;
const routes = express.Router() ;
const {getHome} = require('../controllers/customerControllers') ;

routes.route('/').get(getHome) ;

module.exports = routes ;