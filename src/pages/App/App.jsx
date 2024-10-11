import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import Checkout from '../../components/Checkout/Checkout';
import FishDetailPage from '../../components/FishDetailPage/FishDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [dontShowFishComponent, setShowFishComponent] = useState(true);

  function handleShowFish() {
    setShowFishComponent(false)
  }
  return (
    <main className="App">
         <div className="navContainer">
          <NavBar user={user} setUser={setUser} />
        </div>
        <div className="headerContainer">
          <h1>OCEANIC LUX</h1>
          <h3>Rich Sashimi</h3>
        </div>
    
  
      {user ? (
        <Routes>
          <Route path="/" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage user={user} />} />
          <Route path='/orders/checkout' element={<Checkout dontShowFishComponent={dontShowFishComponent} setShowFishComponent={setShowFishComponent} handleShowFish={handleShowFish} />} />
          <Route path='/fish/:param' element={<FishDetailPage dontShowFishComponent={dontShowFishComponent} setShowFishComponent={setShowFishComponent} handleShowFish={handleShowFish} />} />
        </Routes>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}