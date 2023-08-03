const express = require('express') ;
const routes = express.Router() ;
const { postItems, deleteItems } = require('../controllers/adminCRUDcontrollers');

routes.route('/add-items').post(postItems) ;
routes.route('/delete-items/:id').delete(deleteItems) ;

module.exports = routes ;