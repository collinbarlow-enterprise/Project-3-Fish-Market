import React from 'react'
import CartItemsDetails from '../CartItemsDetails/CartItemsDetails';
import '../Checkout/Checkout.css';

export default function Checkout({ cart, handleShow, setShowCheckout, handleCheckout }) {

  if (!cart) return null;
  const cartItemsMap = cart.lineItems.map(item =>
    <CartItemsDetails
      item={item}
      key={item._id}
    />
  )
  return (
    <div className="cartCheckOutContainerContent">
      {!cartItemsMap.isPaid && (
        <>
          <h3>Items Currently in Cart:</h3>
          <div className='cartItemsMap'> {cartItemsMap} </div>
          <div className="cartCheckOut">
            <p>Total Price: ${cart.orderTotal}</p>
            <button onClick={() => { handleCheckout() }}>Checkout</button>
            <button onClick={() => { handleShow(setShowCheckout) }}>Continue Shopping</button>
          </div>
        </>
      )}
    </div>

  )
}
