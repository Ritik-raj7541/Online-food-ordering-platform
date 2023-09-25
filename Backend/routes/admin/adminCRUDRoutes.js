const express = require('express') ;
const routes = express.Router() ;
const { postItems, deleteItems, getFoodItems, updateItem } = require('../../controllers/admin/adminCRUDcontrollers');

routes.route('/get-all-items/:id').get(getFoodItems) ;
routes.route('/add-items/:id').post(postItems) ;
routes.route('/delete-items/:id').delete(deleteItems) ;
routes.route('/update-items/:id').put(updateItem) ;
module.exports = routes ;