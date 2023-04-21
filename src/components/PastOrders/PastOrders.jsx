import React from 'react'
import PastOrderDetails from '../PastOrderDetails/PastOrderDetails'

export default function PastOrders({pastOrders}) {
    // console.log(pastOrders, 'pastOrders in PASTORDERS COMP.')
    console.log(pastOrders, 'PastOrders in PASTORDERS JSX')


    const paidOrders = pastOrders.map((order, index) => (
        <PastOrderDetails
        key = {index}
        total = {order.orderTotal}
        order = {order}
        item = {order.lineItems}
        />
        ));
  return (
    <div className='PastOrdersDiv'
     style={{
    //   display: 'flex',
    //  flexDirection: 'row' ,
    //  gridTemplateColumns:'repeat(12, 1fr)', 
     padding: '15px', minWidth:'100%', minHeight:'100%',
    // margin: '10px'
  }}
     
     >
        {paidOrders}
    </div>
  )
}
