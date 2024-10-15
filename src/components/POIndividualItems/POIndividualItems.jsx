import React from 'react'

export default function POIndividualItems({ items, index }) {

  let productIndex = index + 1

  return (
    <div className='POIndividual'>
      <div className="POIImage">
        <img src={items.item.imgUrl} />
      </div>
      <div className="POIMetrics">
        <div>Item Number:{productIndex}</div>
        <div>Name: {items.item.speciesName}</div>
        <div>Quantity: {items.quantity}</div>
        <div>Price per lb: ${items.extPrice}</div>
      </div>
    </div>
  )
}
