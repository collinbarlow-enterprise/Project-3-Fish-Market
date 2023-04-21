const express = require('express')
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//get to grab cart
router.get('/cart', ensureLoggedIn, ordersCtrl.cart);

//post to add to cart
router.post('/cart/items/:id',ensureLoggedIn, ordersCtrl.addToCart);

//post to set item quantity
router.put('/cart/quantity',ensureLoggedIn, ordersCtrl.setItem);

//post to checkout for cart
router.post('/cart/checkout',ensureLoggedIn, ordersCtrl.checkout);

//get /previousOrders 
router.get('/previousOrders',ensureLoggedIn, ordersCtrl.getPaidCartController);

router.delete('/deleteOrder', ensureLoggedIn, ordersCtrl.deleteOrder)

module.exports = router