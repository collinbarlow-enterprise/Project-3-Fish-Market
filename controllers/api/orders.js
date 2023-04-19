const Order = require('../../models/order')

module.exports = {
    cart,
    addToCart,
    setItem,
    checkout,
    getPaidCartController
}


// //get to grab cart
// router.get('/cart', ordersCtrl.cart);

async function cart(req, res) {
    console.log('cart CONTROLLER')
    const cart = await Order.getCart(req.user._id);
    res.json(cart)
}

// //post to add to cart
// router.post('/cart/items/:id', ordersCtrl.addToCart);

async function addToCart(req, res) {
    console.log('addToCart CONTROLLER')
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.json(cart);
}

// //post to set item quantity
// router.post('/cart/quantity', ordersCtrl.setItem)

async function setItem(req, res) {
    console.log('setItem CONTROLLER')
    const cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.itemId, req.body.newQty);
    res.json(cart);
}

// //post to checkout for cart
// router.post('/cart/checkout', ordersCtrl.checkout )
//check express terminal for controller console.logs

async function checkout(req, res) {
    // console.log('MADE IT CHECKOUT CONTROLLER')
    const cart = await Order.getCart(req.user._id);
    // console.log(cart, 'cart in checkout CONTROLLERS')
    cart.isPaid = true;
    // console.log(cart.isPaid, 'isPaid AFTER CHECKOUT ')
    await cart.save();
    // console.log(cart, 'cart AFTER SAVE')
    res.json(cart);
}

async function getPaidCartController(req, res) {
    const paidCart = await Order.getPaidCart(req.user._id);
    console.log(paidCart, 'cart in GETPAIDCART CONTROLLER')
    res.json(paidCart);
}