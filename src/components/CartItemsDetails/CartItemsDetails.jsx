import React from 'react'

export default function CartItemsDetails({ item }) {

  return (
    <div className='individualCartItems'>
      <div>{item.item.speciesName}<br/>Quantity:{item.quantity} <br/> Price:{item.extPrice}</div>
      <img src={item.item.imgUrl} />
    </div>
  )
}
