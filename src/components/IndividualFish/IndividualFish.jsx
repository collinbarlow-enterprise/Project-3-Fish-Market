import React from 'react'
import './IndividualFish.css'
import { Link } from 'react-router-dom'

export default function IndividualFish({ fishes, handleAddToOrder, showFishComponent, setShowFishComponent, handleShowFish }) {

  function FishDetail() {
    handleShowFish(setShowFishComponent)
  }

  return (
    <div className='fishCardForeGround'>
      <img src={fishes.imgUrl} />
      <div>Name: <span>{fishes.speciesName} </span>
      </div>
      <div>Price: ${fishes.price} per fish</div>
      <div><button onClick={() => handleAddToOrder(fishes._id)}>Add to cart</button>
        <Link to={`/fish/${fishes.speciesName}`} onClick={FishDetail}>Detail Page</Link> </div>
    </div>
  )
}