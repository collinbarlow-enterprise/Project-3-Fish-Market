import React from 'react'
import './LineItemsOrderDetail.css'

export default function LineItemsOrderDetail({ lineItem, handleChangeQty }) {

  if (lineItem.quantity > 0) {
    return (
        <div className="cartFishOrderCard">
          <div className="cartFishOrderCardImage">
            <img src={lineItem.item.imgUrl} />
          </div>
          <div className="cartFishOrderCardInfo">
            <div className="cartIndividualMetrics"> Name: {lineItem.item.speciesName}</div>
            <div className="cartIndividualMetrics"> Quantity: {lineItem.quantity}</div>
            <div className="cartIndividualMetrics"> Price: ${lineItem.extPrice}</div>
            <button className="cartButtons" onClick={() => handleChangeQty(lineItem.item._id, lineItem.quantity + 1)}>Add</button>
            <button className="cartButtons" onClick={() => handleChangeQty(lineItem.item._id, lineItem.quantity - 1)}>Remove</button>
          </div>
        </div>
    )
  } else {
    return null;
  }
}