import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as ordersAPI from '../../utilities/orders-api'
import LineItemsOrderDetail from '../LineItemsOrderDetail/LineItemsOrderDetail';
import CartItemsDetails from '../CartItemsDetails/CartItemsDetails';

export default function Checkout({ cart, handleShow, setShowCheckout, handleCheckout, handleShowFish, setShowFishComponent }) {
  const navigate = useNavigate();
  console.log(cart, 'cart in Checkout')
  console.log(cart.isPaid, 'cart PAID in CHECKOUT')

  function backToHome() {
    handleShow
    // handleShowFish(setShowFishComponent)
    // console.log(showFishComponent, 'showFishComponent in FishDetail')
    navigate('/orders/new');
  }
  if (!cart) return null;
  const cartItems = cart.lineItems.map(item =>
    <CartItemsDetails
      item={item}
      key={item._id}
    />
  )
  return (
    <>
      {/* <LineItemsOrderDetail /> DOESN'T WORK B/C LINEITEMS INSIDE COMPONENT ARE NOT DEFINED*/}
      <p >Items currently in cart:</p>
      <>{cartItems.isPaid ? null : <div>
        <div className='cartItems' style={{ display: 'flex',flexDirection:'column', backgroundColor: 'white', borderStyle: 'solid', borderSize:'100px', color:'black', margin:'10px'}}> {cartItems} </div>
        <div style={{justifyContent: 'center'}}>
          <>Total Price: {cart.orderTotal}</>
          <button onClick={() => { handleCheckout() }}>Checkout</button>
          <button onClick={() => { handleShow(setShowCheckout) }}>Continue Shopping</button>
        </div>
      </div>
      }</>

    </>
  )
}
