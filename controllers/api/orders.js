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

//when using this.find instead of this.findOne in the static method I am returning an array of documents instead of a single document
// thus when I try to access the lineItems property in the controller function(or after) the lineItems property doesn't actually exist
// that explains why I lost so much data and had to use the find method equaling the itemId in the deepest orderHistory componenet
//to fix this I can either change the static method to this.findONe (whihch would only call one) or I can alter the controller function 
// that loops through each document and accesses the lineItems property for each one 

//I am looping through the paidCart array that is returned by getPaidCart and then adding the orderTotal property to each cart
//I am using the ...cart.toJSON() to change the cart from a mongoose document object, to a javascript object which can then be added onto/modified
//the coma is used to seperate properties from within the object
async function getPaidCartController(req, res) {
    const paidCart = await Order.getPaidCart(req.user._id);
    // console.log(paidCart, 'cart in GETPAIDCART CONTROLLER')
    const paidCartsWithTotal = paidCart.map(cart => ({
        ...cart.toJSON(),
        orderTotal: cart.orderTotal
    }));
    // console.log(paidCartsWithTotal, 'paid carts with TOTAL in controller')
    res.json(paidCartsWithTotal);
}