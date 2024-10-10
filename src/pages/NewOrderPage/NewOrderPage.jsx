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
    <div className="gridContainer">
      <div className="heroImageContainer">
        <img></img>
      </div>
      <div className="aboutContainer">
        <div className="aboutContent">
          <h3>ABOUT</h3>
          <div className="aboutFlex">
            <p>
              At Oceanic Lux, we take pride in delivering only the freshest, most sustainable sashimi to our customers. Each selection is curated from fisheries that prioritize environmental health and responsible harvesting. Our dedication to quality ensures that every piece of seafood is expertly prepared for your enjoyment.
            </p>


            <p>
              With decades of experience, we combine traditional techniques with modern practices to create a truly premium experience. We are committed to supporting small-scale fisheries and minimizing our environmental footprint, making every bite a conscious choice for a better future.
            </p>

          </div>
        </div>
      </div>
      <div className="cartContainer">
        <div className="cartCheckoutContainer">
          {showCheckout ? <Checkout cart={cart} handleShow={handleShow} setShowCheckout={setShowCheckout} handleCheckout={handleCheckout} handleShowFish={handleShowFish} /> : null}
        </div>
        <div className="cartOrderDetailContainer">
          {showCheckout ? null : <OrderDetail cart={cart} handleChangeQty={handleChangeQty} handleShow={handleShow} setShowCheckout={setShowCheckout} showCheckout={showCheckout} />}
        </div>
      </div>
      <div className="productContainer">
        <div className="productFishContainer">
          {showCheckout ? null : <FishComponent fish={fish} handleAddToOrder={handleAddToOrder} showFishComponent={showFishComponent} setShowFishComponent={setShowFishComponent} handleShowFish={handleShowFish} />}
        </div>
      </div>
    </div>
  )
}
