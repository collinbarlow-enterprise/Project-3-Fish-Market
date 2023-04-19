import React from 'react'
import { useState, useEffect } from 'react'
import * as ordersAPI from '../../utilities/orders-api'
import LineItemsOrderDetail from '../LineItemsOrderDetail/LineItemsOrderDetail';
import CartItemsDetails from '../CartItemsDetails/CartItemsDetails';

export default function Checkout({cart, handleShow, setShowCheckout, handleCheckout}) {

console.log(cart, 'cart in Checkout')
console.log(cart.isPaid, 'cart PAID in CHECKOUT')

if (!cart) return null;
const cartItems = cart.lineItems.map(item => 
    <CartItemsDetails
      item = {item}
      key = {item._id}
    />
    )
return (
    <>
        {/* <LineItemsOrderDetail /> DOESN'T WORK B/C LINEITEMS INSIDE COMPONENT ARE NOT DEFINED*/}
        <p>checkout componenet info</p>
        <>{cartItems}</>
        <>Total Price: {cart.orderTotal}</>
        <button onClick={() => {handleCheckout()}}>Checkout</button>
    
    </>
  )
}
