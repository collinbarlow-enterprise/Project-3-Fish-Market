import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import * as fishAPI from '../../utilities/fish-api'


export default function App() {
  const [user, setUser] = useState(getUser());
  const [fish, setFish] = useState([]);

  useEffect(function() {
    async function getFish() {
      const fish = await fishAPI.getAll();
      console.log(fish, 'before set, fish in getFish function on app.jsx')
      setFish(fish);
    }
    getFish();
    console.log(fish, 'after set, fish in getFish function on app.jsx');
  }, []);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders/new" element={<NewOrderPage fish={fish} />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <>cart page</>
          </Routes>
          {/* <NewOrderPage /> */}
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}