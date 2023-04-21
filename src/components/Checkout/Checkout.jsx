import React from 'react'
import CartItemsDetails from '../CartItemsDetails/CartItemsDetails';

export default function Checkout({ cart, handleShow, setShowCheckout, handleCheckout}) {

  if (!cart) return null;
  const cartItems = cart.lineItems.map(item =>
    <CartItemsDetails
      item={item}
      key={item._id}
    />
  )
  return (
    <>
      <p >Items currently in cart:</p>
      <>{cartItems.isPaid ? null : <div>
        <div className='cartItems' style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderStyle: 'solid', borderSize: '100px', color: 'black', margin: '10px' }}> {cartItems} </div>
        <div style={{ justifyContent: 'center' }}>
          <>Total Price: {cart.orderTotal}</>
          <button onClick={() => { handleCheckout() }}>Checkout</button>
          <button onClick={() => { handleShow(setShowCheckout) }}>Continue Shopping</button>
        </div>
      </div>
      }</>
    </>
  )
}
