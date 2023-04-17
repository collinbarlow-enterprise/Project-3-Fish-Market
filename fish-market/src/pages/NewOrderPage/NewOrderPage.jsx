import React from 'react'
import { useState, useEffect } from 'react'
import FishComponent from '../../components/Fish/FishComponent'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import * as ordersAPI from '../../utilities/orders-api'
import * as fishAPI from '../../utilities/fish-api'

export default function NewOrderPage() {

  const [cart, setCart] = useState(null)
  const [fish, setFish] = useState([]);

  async function getFish() {
    try {
    console.log('made it inside getFish')
    const fish = await fishAPI.getAll();
    console.log(fish, 'before set, fish in getFish function on app.jsx')
    setFish(fish);
    console.log(fish, 'after set, fish in getFish function on app.jsx');
  } catch (error) {
    console.error(error, 'error for getFish');
  }}

  async function getCart(){
    const cart = await ordersAPI.getCart();
    console.log(cart, 'cart in getCart function on NewOrder')
    setCart(cart);
  }

  useEffect(function() {
    console.log('useEffect has been called')
    getFish();
    getCart();
  }, []);  
    //only updates once on page load, if I want to have it continually update without causing a loop I need to have some sort of state change within the second argument - maybe an onClick with another state that is tied to a show component "show catalog button"



  async function handleAddToOrder(itemId) {
    try { 
      console.log(itemId, 'itemId before handleAddToOrder')
    const updatedCart = await ordersAPI.addToCart(itemId)
    console.log(itemId, 'itemId in handleAddToOrder')
    setCart(updatedCart)
  } catch (error) {
    console.error(error);
  }
}
  
  return (
    <>
    <br />
    <>logo</>
    <br />
  
    <>current cart in the NewOrderPage:</>
    <OrderDetail cart={cart}/>
    <br />
    <h1>Order Fish Here - New Order Page</h1>
    <>categories - is this a separate component?</>
    <br />
    <br />
   <FishComponent fish={fish} handleAddToOrder={handleAddToOrder}/>
    
    
    </>
    
  )
}
