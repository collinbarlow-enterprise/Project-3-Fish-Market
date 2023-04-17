import sendRequest from './send-request';
const BASE_URL = './api/orders';

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
}
export function addtoCart() {
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}
export function setQtyInCart() {
    return sendRequest(`${BASE_URL}/cart/quantity`, 'PUT', {itemId, newQty });
}
export function checkout() {
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

//routes from routes/orders
// //get to grab cart
// router.get('/cart', ordersCtrl.cart);

// //post to add to cart
// router.post('/cart/items/:id', ordersCtrl.addToCart);

// //post to set item quantity
// router.post('/cart/quantity', ordersCtrl.setItem)

// //post to checkout for cart
// router.post('/cart/checkout', ordersCtrl.checkout )