import React from 'react'
import CartItemsDetails from '../CartItemsDetails/CartItemsDetails';

export default function Checkout({ cart, handleShow, setShowCheckout, handleCheckout}) {

  if (!cart) return null;
  const cartItemsMap = cart.lineItems.map(item =>
    <CartItemsDetails
      item={item}
      key={item._id}
    />
  )
  return (
    <>
      <p >Items currently in cart:</p>
      <>{cartItemsMap.isPaid ? null : <div>
        <div className='cartItemsMap'> {cartItemsMap} </div>
        <div>
          <>Total Price: {cart.orderTotal}</>
          <button onClick={() => { handleCheckout() }}>Checkout</button>
          <button onClick={() => { handleShow(setShowCheckout) }}>Continue Shopping</button>
        </div>
      </div>
      }</>
    </>
  )
}
