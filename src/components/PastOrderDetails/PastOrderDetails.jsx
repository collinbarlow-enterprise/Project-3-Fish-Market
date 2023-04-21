import React from 'react'
import POIndividualItems from '../POIndividualItems/POIndividualItems'

export default function PastOrderDetails({total, order, item}) {

  // const orderTotalQty = order.totalQty
// console.log(order, 'order in PastOrderDetails')
console.log(item, 'ITEM in PastOrderDetails')
// console.log(total, 'total in PastOrderDetails')

  return (
    <div className='PastOrdersDetails'style={{
      borderStyle:'solid', borderSize: '5px', borderColor:'black'
      , display: 'flex',
      flexDirection: 'column' ,
      // flexDirection: 'row' ,
      gridTemplateRows: 'repeat(6,1fr',
      // gridTemplateColumns:'repeat(, 1fr)', 
      padding: '15px', 
      minWidth:'85%', minHeight:'85%'
      }}>
        <div>Prior Order Details</div><div>Order Total:  ${total} </div><div>Number of Items :  {order.totalQty} </div>
        <div>
        {item.map((lineItem, index) => (
            <POIndividualItems
            key={index}
            items={lineItem}
            quantity={lineItem.quantity}
            // total={total}
            // orderTotalQty={orderTotalQty}
            />
               
        ))}
        </div> 
    </div>
  )
}
