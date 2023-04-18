import React from 'react'
// import { index } from '../../../controllers/api/fishes-controller'
import IndividualFish from '../IndividualFish/IndividualFish'

export default function fish({fish, handleAddToOrder}) {
  // console.log(fish, 'fish on FishComponenet')
  const fishesC = fish.map(f =>
    <IndividualFish 
      // key={}
      fishes={f}
      handleAddToOrder={handleAddToOrder}
      />    
    );

  return (
    <>
    <div>fishies below: </div>
    <div style={{display: 'grid', gridTemplateColumns:'repeat(3, 1fr)'}}>{fishesC} </div>
    </>
    
  )
}
