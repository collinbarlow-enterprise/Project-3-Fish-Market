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
  }
  getPaidOrders();
},[]);

  return (
    <main className="OrderHistoryPage">
      <PastOrders pastOrders={pastOrders}/>
      <>details of prior orders</>
      <>running tally of money spent, or number of fish?</>

    </main>
  );
}