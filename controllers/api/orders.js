const Order = require('../../models/order')

module.exports = {
    cart,
    addToCart,
    setItem,
    checkout
}


// //get to grab cart
// router.get('/cart', ordersCtrl.cart);

async function cart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart)
}

// //post to add to cart
// router.post('/cart/items/:id', ordersCtrl.addToCart);

async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.json(cart);
}

// //post to set item quantity
// router.post('/cart/quantity', ordersCtrl.setItem)

async function setItem(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.itemId, req.body.newQty);
    res.json(cart);
}

// //post to checkout for cart
// router.post('/cart/checkout', ordersCtrl.checkout )

async function checkout(req, res) {
    console.log('MADE IT CHECKOUT CONTROLLER')
    const cart = await Order.getCart(req.user._id);
    console.log(cart, 'cart in checkout CONTROLLERS')
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
}