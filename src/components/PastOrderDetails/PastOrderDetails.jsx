import React from 'react'
import POIndividualItems from '../POIndividualItems/POIndividualItems'

export default function PastOrderDetails({ total, order, item, handleDelete }) {
console.log(order, 'order on PastOrderDetails')
  return (
    <div className='PastOrdersDetails' style={{
      borderStyle: 'solid', borderSize: '5px', borderColor: 'black', display: 'flex', flexDirection: 'column', gridTemplateRows: 'repeat(6,1fr', padding: '15px', minWidth: '85%', minHeight: '85%'
    }}>
      <div>Prior Order Details</div><div>Order Total:  ${total} </div><div>Number of Items :  {order.totalQty} </div>
     
      <div>
        {item.map((lineItem, index) => (
          <POIndividualItems
            key={index}
            items={lineItem}
            quantity={lineItem.quantity}
          />
        ))}
      </div>
      <button onClick={() => handleDelete(order)}>delete</button>
    </div>
  )
}
