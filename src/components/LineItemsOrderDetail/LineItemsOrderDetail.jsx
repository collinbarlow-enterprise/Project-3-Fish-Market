import React from 'react'
import './LineItemsOrderDetail.css'

export default function LineItemsOrderDetail({ lineItem, handleChangeQty }) {

  if (lineItem.quantity > 0) {
    return (
      <div>
        <div className="fishCardOrder" style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
          <div>Name: {lineItem.item.speciesName}</div>
          <div>How many: {lineItem.quantity}</div>
          <div>Price: ${lineItem.extPrice}</div>
          <img src={lineItem.item.imgUrl} style={{ height: '100px', width: '100px' }} />

        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button onClick={() => handleChangeQty(lineItem.item._id, lineItem.quantity + 1)}>Add</button>
          <button onClick={() => handleChangeQty(lineItem.item._id, lineItem.quantity - 1)}>Remove</button>
        </div>
      </div>
    )
  } else {
    return null;
  }
}