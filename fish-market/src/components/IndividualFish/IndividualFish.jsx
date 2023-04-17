import React from 'react'
import './IndividualFish.css'

export default function IndividualFish({fishes}) {
  return (
    <>
    {/* update div to hold the image in some way(background?image above/below) */}
    <div className='card'>
      <div>Name: {fishes.speciesName}</div>
      <div>Color: {fishes.color}</div>
      <div>Price: ${fishes.price} per fish</div>
      <div>Taste: {fishes.taste}</div>
      <img src={fishes.imgUrl} style={{height: '200px', width: '200px'}} />
    </div>
    </>
    
  )
}
