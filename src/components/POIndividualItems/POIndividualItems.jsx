import React from 'react'

export default function POIndividualItems({ items }) {

  return (
    <div className='POIndividual'>
      <img src={items.item.imgUrl} style={{ height: '100px', width: '120px', margin: '10px' }} />
      <div>Name: {items.item.speciesName}<br />Price per fish: ${items.extPrice} <br /> Quantity: {items.quantity}</div>
      <div>Price per order: ${items.extPrice}</div>
      <br/>
    </div>
  )
}
