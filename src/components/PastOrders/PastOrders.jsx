import React from 'react'
import PastOrderDetails from '../PastOrderDetails/PastOrderDetails'

export default function PastOrders({pastOrders}) {
    // console.log(pastOrders, 'pastOrders in PASTORDERS COMP.')
    // console.log(pastOrders, 'PastOrders')


    const paidOrders = pastOrders.map(order => 
        <PastOrderDetails
        key = {order.id}
        total = {order.orderTotal}
        order = {order}
        item = {order.lineItems}
        />
        )
  return (
    <div>
        {paidOrders}
    </div>
  )
}
