import React from 'react'
import './LineItemsOrderDetail.css'

export default function LineItemsOrderDetail({lineItem, handleChangeQty }) {
    console.log(lineItem, 'lineItem in lineItemOrder')
    if (lineItem.quantity > 0){
  return (
    <div className="fishCardOrder">
        <div>Name: {lineItem.item.speciesName}</div>
        <div>How many: {lineItem.quantity}</div>
        <img src={lineItem.item.imgUrl} style={{height: '100px', width: '100px'}} />
        <button onClick={() => handleChangeQty(lineItem.item._id, lineItem.quantity +1)}>Add</button>
        <button onClick={() => handleChangeQty(lineItem.item._id, lineItem.quantity -1)}>Remove</button>
    </div>
  )
} else {
  return null;
}}