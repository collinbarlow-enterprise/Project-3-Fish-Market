import React from 'react'

export default function CartItemsDetails({ item }) {

  return (
    <div className='individualCartItems'>
      <div className="individualCartItemsInfo">
        <div>{item.item.speciesName}</div>
        <div>Quantity:{item.quantity}</div>
        <div> Price:{item.extPrice}</div>
      </div>
      <div className="individualCartItemsImage">
        <img src={item.item.imgUrl} />
      </div>
    </div>
  )
}
