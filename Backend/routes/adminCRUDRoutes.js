const express = require('express') ;
const routes = express.Router() ;
const { postItems, deleteItems, getFoodItems, getCategory, updateItem } = require('../controllers/admin/adminCRUDcontrollers');

routes.route('/get-all-items').get(getFoodItems) ;
routes.route('/get-all-category').get(getCategory) ;
routes.route('/add-items').post(postItems) ;
routes.route('/delete-items/:id').delete(deleteItems) ;
routes.route('/update-items/:id').put(updateItem) ;
module.exports = routes ;