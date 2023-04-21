import React from 'react'
import './IndividualFish.css'
import { Link } from 'react-router-dom'

export default function IndividualFish({ fishes, handleAddToOrder, showFishComponent, setShowFishComponent, handleShowFish }) {

  function FishDetail() {
    handleShowFish(setShowFishComponent)
    console.log(showFishComponent, 'showFishComponent after IndividualFish Detail ')
  }

  return (
    <>
      <div className='card' style={{ margin: '10px', alignItems: 'center', }}>
        <img src={fishes.imgUrl} style={{ height: '50%', width: '100%' }} />
        <div>Name: <span>{fishes.speciesName} </span>
        </div>
        <br />
        <div>Price: ${fishes.price} per fish</div>
        <br />
        <div style={{ justifyContent: 'space-around' }}><button onClick={() => handleAddToOrder(fishes._id)}>Add to cart</button>
          <Link to={`/fish/${fishes.speciesName}`} onClick={FishDetail}>Detail Page</Link> </div>
      </div>
    </>

  )
}