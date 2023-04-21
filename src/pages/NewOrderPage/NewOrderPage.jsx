import React from 'react'
import { useState, useEffect } from 'react'
import FishComponent from '../../components/Fish/FishComponent'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import * as ordersAPI from '../../utilities/orders-api'
import * as fishAPI from '../../utilities/fish-api'
import Checkout from '../../components/Checkout/Checkout'
import { useNavigate } from 'react-router-dom'
import './NewOrderPage.css'

export default function NewOrderPage({ showFishComponent, setShowFishComponent, handleShowFish }) {

  const [cart, setCart] = useState(null)
  const [fish, setFish] = useState([]);
  const [showCheckout, setShowCheckout] = useState(null);
  const navigate = useNavigate();

  async function getFish() {
    try {
      const fish = await fishAPI.getAll();
      setFish(fish);
    } catch (error) {
      console.error(error, 'error for getFish');
    }
  }

  async function getCart() {
    const cart = await ordersAPI.getCart();
    setCart(cart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');

  }

  useEffect(function () {
    getFish();
    getCart();
  }, []);

  async function handleAddToOrder(itemId) {
    try {
      const updatedCart = await ordersAPI.addToCart(itemId)
      setCart(updatedCart)
    } catch (error) {
      console.error(error);
    }
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItem(itemId, newQty);
    setCart(updatedCart)
  }

  function handleShow(setShowCheckout) {
    setShowCheckout((current) => !current)
  }

  return (
    <div className="Foundation">
      <br />
      {showCheckout ? null : <h4>The Finest Fish In All The Sea</h4>}
      <br />
      {showCheckout ? <Checkout cart={cart} handleShow={handleShow} setShowCheckout={setShowCheckout} handleCheckout={handleCheckout} handleShowFish={handleShowFish} /> : null}
      {showCheckout ? null : <OrderDetail cart={cart} handleChangeQty={handleChangeQty} handleShow={handleShow} setShowCheckout={setShowCheckout} showCheckout={showCheckout} />}
      <br />
      {showCheckout ? null : <FishComponent fish={fish} handleAddToOrder={handleAddToOrder} showFishComponent={showFishComponent} setShowFishComponent={setShowFishComponent} handleShowFish={handleShowFish} />}
    </div>
  )
}
