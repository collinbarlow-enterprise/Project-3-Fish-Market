import * as ordersAPI from '../../utilities/orders-api';
import { useState, useEffect } from 'react';
import PastOrders from '../../components/PastOrders/PastOrders';
import './OrderHistoryPage.css'

export default function OrderHistoryPage({ }) {
  const [pastOrders, setPastOrders] = useState([])

  useEffect(function () {
    async function getPaidOrders() {
      const orders = await ordersAPI.getPaidOrder();
      setPastOrders(orders);
    }
    getPaidOrders();
  }, []);

  async function handleDelete(order) {
    await ordersAPI.deleteOrder(order);
  }
  return (
    <div className="OrderHistoryPage">
      <h3>Past Order Details</h3>
      <PastOrders pastOrders={pastOrders} handleDelete={handleDelete} />
    </div>
  );
}