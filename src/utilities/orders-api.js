import sendRequest from './send-request';
const BASE_URL = '/api/orders';

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
}
export function addToCart(itemId) {
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}
export function setItem(itemId, newQty) {
    return sendRequest(`${BASE_URL}/cart/quantity`, 'PUT', {itemId, newQty });
}
export function checkout() {
    console.log('MADE IT TO API')
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getPaidOrder() {
    return sendRequest(`${BASE_URL}/previousOrders`)
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