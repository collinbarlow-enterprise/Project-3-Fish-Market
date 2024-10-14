import React from 'react'

import "../LineItemsOrderDetail/LineItemsOrderDetail.css"
import { Link } from 'react-router-dom'

export default function IndividualFish({ fishes, handleAddToOrder, showFishComponent, setShowFishComponent, handleShowFish }) {
  // console.log(fishes)

  function FishDetail() {
    handleShowFish(setShowFishComponent)
  }

  return (
    <div className='cartFishOrderCard'>
      <div className="cartFishOrderCardWrapper">
        <div className="cartFishOrderCardWrapper2">
          <div className="cartFishOrderCardImage">
            <img src={fishes.imgUrl} />
          </div>
          <div className="cartFishOrderCardInfo">
            <div className="cartIndividualMetrics"> {fishes.speciesName}</div>
            <div className="cartIndividualMetrics"> <div>Price:</div><div> ${fishes.price}/lb</div></div>
            <button className="cartButtons" onClick={() => handleAddToOrder(fishes._id)}>Add to cart</button>
            <button className="cartButtons"> <Link to={`/fish/${fishes.speciesName}`} onClick={FishDetail}>Detail Page</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}
