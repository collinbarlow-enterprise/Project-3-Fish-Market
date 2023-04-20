import React from 'react'
import POIndividualItems from '../POIndividualItems/POIndividualItems'

export default function PastOrderDetails({total, order, item}) {

// console.log(order, 'order in PastOrderDetails')
console.log(item, 'ITEM in PastOrderDetails')
// console.log(total, 'total in PastOrderDetails')

  return (
    <div>
        <div>Prior Order Details</div> 
        <div>Order Total:  ${total} </div>
        <div>Number of Items :  {order.totalQty} </div>
        {item.map((lineItem, index) => (
            <POIndividualItems
            key={index}
            items={lineItem}
            quantity={lineItem.quantity}
            />
        ))}
    </div>
  )
}
