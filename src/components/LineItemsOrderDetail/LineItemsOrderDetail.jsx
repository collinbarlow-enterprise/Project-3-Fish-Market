import React from 'react'
import './LineItemsOrderDetail.css'

export default function LineItemsOrderDetail({ lineItem, handleChangeQty }) {

  if (lineItem.quantity > 0) {
    return (
        <div className="cartFishOrderCard">
        <div className="cartFishOrderCardWrapper">
        <div className="cartFishOrderCardWrapper2">
          <div className="cartFishOrderCardImage">
            <img src={lineItem.item.imgUrl} />
          </div>
          <div className="cartFishOrderCardInfo">
            <div className="cartIndividualMetrics"> {lineItem.item.speciesName}</div>
            <div className="cartIndividualMetrics"> 
            <div>Quantity: </div>
            <div>{lineItem.quantity}</div>
            </div>
            <div className="cartIndividualMetrics"> 
            <div>Price: </div>
            <div>${lineItem.extPrice}</div>
            </div>
            <button className="cartButtons" onClick={() => handleChangeQty(lineItem.item._id, lineItem.quantity + 1)}>Add</button>
            <button className="cartButtons" onClick={() => handleChangeQty(lineItem.item._id, lineItem.quantity - 1)}>Remove</button>
          </div>
        </div>
        </div>
        </div>
    )
  } else {
    return null;
  }
}