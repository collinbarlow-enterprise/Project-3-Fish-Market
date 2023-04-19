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

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} />} />
            <Route path='/orders/checkout' element={<Checkout />} />
            <Route path='/fish/:param' element={<FishDetail />} />
            {/* cart page is order detail where we pass in the cart state, and the handleChangeQty and handleCheckout */}
            <>CART: {OrderDetail}</>
          </Routes>
          {/* <NewOrderPage /> */}
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}