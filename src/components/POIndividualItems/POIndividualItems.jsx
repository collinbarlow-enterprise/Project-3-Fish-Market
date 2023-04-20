import React from 'react'

export default function POIndividualItems({items}) {
  console.log(items, 'items in PO')

return (
  <div>
        <div>Name: {items.item.speciesName}</div>
        <div>Price per fish: ${items.extPrice}</div>
        <div>Quantity: {items.quantity}</div>
        <div>Price per order: ${items.extPrice}</div>
        <img src={items.item.imgUrl} style={{height: '200px', width: '200px'}}/>
        <br />
      </div>
  

)
}
