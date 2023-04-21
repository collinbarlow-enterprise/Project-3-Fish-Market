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
    <main className="OrderHistoryPage container"
    >
      <div
      // className='row'
      style={{
        display: 'flex', flexDirection: 'column' ,
        // gridTemplateColumns:'repeat(3, 1fr)', 
        padding: '15px', margin: '20px'
        , minWidth:'100px', minHeight:'100px',
        backgroundColor: '#777777',
        color: 'white'

      }}
      
      >
      <PastOrders pastOrders={pastOrders}/>
      </div>
    </main>
  );
}