import React from 'react'

export default function LineItemsOrderDetail({lineItem, handleChangeQty }) {
    console.log(lineItem, 'lineItem in lineItemOrder')
  return (
    <div>
        <div>{lineItem.name}</div>
        <div></div>
        <div></div>
        <button onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty +1)}>Add</button>
        <button onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty -1)}>Remove</button>
    </div>
  )
}
