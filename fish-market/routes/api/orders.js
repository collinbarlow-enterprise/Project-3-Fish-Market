const express = require('express')
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders')


//get to grab cart
router.get('/cart', ordersCtrl.cart);

//post to add to cart
router.post('/cart/items/:id', ordersCtrl.addToCart);

//post to set item quantity
router.post('/cart/quantity', ordersCtrl.setItem)

//post to checkout for cart
router.post('/cart/checkout', ordersCtrl.checkout )

module.exports = router