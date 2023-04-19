import React from 'react'

export default function CartItemsDetails({item}) {
    console.log(item, 'item in CartDetails')
    
  return (
    <div>
        <div>Name:   {item.item.speciesName}   </div>
        <div>Quantity:   {item.quantity}  </div>
        <div>Name:   {item.extPrice}  </div>
        <img src={item.item.imgUrl} style={{height: '100px', width: '100px'}} />

    </div>
  )
}
