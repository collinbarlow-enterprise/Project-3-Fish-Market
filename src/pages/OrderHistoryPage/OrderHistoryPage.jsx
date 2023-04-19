import * as ordersAPI from '../../utilities/orders-api';
import { useState, useEffect } from 'react';
import PastOrders from '../../components/PastOrders/PastOrders';


export default function OrderHistoryPage({ }) {

const [pastOrders, setPastOrders] = useState ([])
const [] = useState ()

useEffect(function() {
  async function getPaidOrders() {
    const orders = await ordersAPI.getPaidOrder();
    setPastOrders(orders);
    console.log(pastOrders, 'pastOrders in ORDERHISTORY')
  }
  getPaidOrders();
},[]);

  return (
    <main className="OrderHistoryPage">
      <PastOrders pastOrders={pastOrders}/>
    </main>
  );
}