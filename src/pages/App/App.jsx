import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import Checkout from '../../components/Checkout/Checkout';
import FishDetail from '../../components/FishDetail/FishDetail';
import FishDetailPage from '../../components/FishDetailPage/FishDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [dontShowFishComponent, setShowFishComponent]= useState(true);

  function handleShowFish() {
    setShowFishComponent(false)
    console.log(dontShowFishComponent, 'showFishComponent in handleShowFish ')
  } 
  return (
    <main className="App">
      { user ?
        <>
      
          <NavBar user={user} setUser={setUser} />
          <h2>Welcome to Oceanic Lux</h2>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} />} />
            <Route path='/orders/checkout' element={<Checkout dontShowFishComponent={dontShowFishComponent} setShowFishComponent={setShowFishComponent} handleShowFish={handleShowFish}/>} />
            <Route path='/fish/:param' element={<FishDetailPage dontShowFishComponent={dontShowFishComponent} setShowFishComponent={setShowFishComponent} handleShowFish={handleShowFish}/>} />
            {/* cart page is order detail where we pass in the cart state, and the handleChangeQty and handleCheckout */}
            {/* <>CART: {OrderDetail}</> */}
          </Routes>
          
          { dontShowFishComponent ? null  :  (<NewOrderPage dontShowFishComponent={dontShowFishComponent} setShowFishComponent={setShowFishComponent} handleShowFish={handleShowFish}/>) }
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}