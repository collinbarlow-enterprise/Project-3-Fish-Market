import React from 'react'
import './POIndividualItems.css'

export default function POIndividualItems({ items, index }) {

  let productIndex = index + 1

  return (
    <div className='POIndividual'>
      <div className="POIMetrics">
        <div>Item {productIndex}:</div>
        <div className="fishName">{items.item.speciesName}</div>

        {/* Corrected ternary for singular/plural "lb" */}
        <div>
          {items.quantity > 1
            ? `${items.quantity} lbs @ $${items.extPrice} / lb`
            : `${items.quantity} lb @ $${items.extPrice} / lb`}
        </div>

        <div>Total: ${items.extPrice * items.quantity}</div>
      </div>

      <div className="POIImage">
        <img src={items.item.imgUrl} alt={items.item.speciesName} />
      </div>
    </div>
  )
}
