import React from 'react'
import POIndividualItems from '../POIndividualItems/POIndividualItems'
import "./PastOrderDetails.css"

export default function PastOrderDetails({ total, order, item, handleDelete }) {
  return (
    <div className='PastOrdersDiv'>
      <div className='PastOrdersDetails'>

        <div className="PastOrdersInfoContainer">
          <div className="PastOrdersInfo">
          <div>Order ID:</div><div>{order.orderId}</div>
          </div>
          <div className="PastOrdersInfo">
          <div>Order Total:</div><div>${total} </div>
          </div>
          <div className="PastOrdersInfo">
          <div>Number of Items:</div><div>{order.totalQty}</div>
          </div>
        </div>

        <div className="POItemsContainer">
          {item.map((lineItem, index) => (
            <POIndividualItems
              key={index}
              index={index}
              items={lineItem}
              quantity={lineItem.quantity}
            />
          ))}
        </div>
      </div>
      <button className="orderDeleteButton" onClick={() => handleDelete(order)}>Delete Order</button>

    </div>
  )
}
