import React from 'react'
import './LineItemsOrderDetail.css'

export default function LineItemsOrderDetail({ lineItem, handleChangeQty }) {

  if (lineItem.quantity > 0) {
    return (
      <div>
        <div className="fishCardOrder">
          <div>Name: {lineItem.item.speciesName}</div>
          <div>How many: {lineItem.quantity}</div>
          <div>Price: ${lineItem.extPrice}</div>
          <img src={lineItem.item.imgUrl}/>

        </div>
        <div>
          <button onClick={() => handleChangeQty(lineItem.item._id, lineItem.quantity + 1)}>Add</button>
          <button onClick={() => handleChangeQty(lineItem.item._id, lineItem.quantity - 1)}>Remove</button>
        </div>
      </div>
    )
  } else {
    return null;
  }
}