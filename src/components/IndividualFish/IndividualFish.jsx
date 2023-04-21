import React from 'react'
import './IndividualFish.css'
import { Link } from 'react-router-dom'

export default function IndividualFish({fishes, handleAddToOrder, showFishComponent, setShowFishComponent, handleShowFish}) {

  function FishDetail() {
    handleShowFish(setShowFishComponent)
    console.log(showFishComponent, 'showFishComponent after IndividualFish Detail ')
  }

  // console.log(fishes, 'fishes on individual fishes')
  return (
    <>
    {/* update div to hold the image in some way(background?image above/below) */}
    <div className='card' style={{margin: '10px', alignItems:'center',}}>
    <img src={fishes.imgUrl} style={{height: '50%', width: '100%'}} />
      <div>Name: <span>{fishes.speciesName} </span>
      {/* or {fishes.altName} */}
      </div>
      <br />
      {/* <div>Color: {fishes.color}</div> */}
      <div>Price: ${fishes.price} per fish</div>
      <br />
      {/* <div>Taste: {fishes.taste}</div> */}
      <div style={{justifyContent:'space-around'}}><button onClick ={ () => handleAddToOrder(fishes._id)}>Add to cart</button>  
      <Link to={`/fish/${fishes.speciesName}`} onClick={FishDetail}>Detail Page</Link> </div>
    </div>
    </>
    
  )
}

{/* <button onClick={() => {handleCheckout()}}>Checkout</button> */}