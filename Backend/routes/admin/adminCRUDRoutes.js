const express = require('express') ;
const routes = express.Router() ;
const { postItems, deleteItems, getFoodItems, updateItem, updateOrder } = require('../../controllers/admin/adminCRUDcontrollers');

routes.route('/get-all-items/:id').get(getFoodItems) ;
routes.route('/add-items/:id').post(postItems) ;
routes.route('/delete-items/:id/:itemId').put(deleteItems) ;
routes.route('/update-items/:id').put(updateItem) ;
routes.route('/update-orders/:resEmail/:custEmail').get(updateOrder) ;
module.exports = routes ;