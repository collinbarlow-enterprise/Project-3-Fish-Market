import React from 'react'
import PastOrderDetails from '../PastOrderDetails/PastOrderDetails'

export default function PastOrders({ pastOrders }) {

  const paidOrders = pastOrders.map((order, index) => (
    <PastOrderDetails
      key={index}
      total={order.orderTotal}
      order={order}
      item={order.lineItems}
    />
  ));
  return (
    <div className='PastOrdersDiv' style={{ padding: '15px', minWidth: '100%', minHeight: '100%' }}>
      {paidOrders}
    </div>
  )
}
