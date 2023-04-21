import React from 'react'

export default function CartItemsDetails({ item }) {

  return (
    <div className='individualCartItems' style={{ display: 'flex', flexDirection: 'row', padding: '10px', margin: '10px', justifyContent: 'space-between' }}>
      <div>{item.item.speciesName}<br />Quantity:   {item.quantity} <br />Price:   {item.extPrice}  </div>
      <img src={item.item.imgUrl} style={{ height: '100px', width: '100px', margin: '10px' }} />
    </div>
  )
}
