import React from 'react'
// import '../CartItemsDetails/CartItemsDetail.css'
import '../LineItemsOrderDetail/LineItemsOrderDetail.css'


export default function CartItemsDetails({ item }) {

  return (
    <div className="cartFishOrderCard">
      <div className="cartFishOrderCardWrapper">
        <div className="cartFishOrderCardWrapper2">
          <div className="cartFishOrderCardImage">
            <img src={item.item.imgUrl} />
          </div>
          <div className="cartFishOrderCardInfo">
            <div className="cartIndividualMetrics"> {item.item.speciesName}</div>
            <div className="cartIndividualMetrics">
              <div>Quantity: </div>
              <div>{item.quantity}</div>
            </div>
            <div className="cartIndividualMetrics">
              <div>Price: </div>
              <div>${item.extPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
