import React from 'react'
import './IndividualFish.css'

export default function IndividualFish({fishes, handleAddToOrder}) {
  // console.log(fishes, 'fishes on individual fishes')
  return (
    <>
    {/* update div to hold the image in some way(background?image above/below) */}
    <div className='card'>
      <div>Names: {fishes.speciesName} or {fishes.altName}</div>
      <div>Color: {fishes.color}</div>
      <div>Price: ${fishes.price} per fish</div>
      <div>Taste: {fishes.taste}</div>
      <button onClick ={ () => handleAddToOrder(fishes._id)}>Add to cart</button>
      <img src={fishes.imgUrl} style={{height: '200px', width: '200px'}} />
    </div>
    </>
    
  )
}
