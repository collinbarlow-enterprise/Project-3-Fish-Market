import React from 'react'
// import { index } from '../../../controllers/api/fishes-controller'
import IndividualFish from '../IndividualFish/IndividualFish'

export default function fish({fish}) {
  console.log(fish, 'fish on FishComponenet')
  const fishesC = fish.map(f =>
    <IndividualFish 
      // key={}
      fishes={f}
      />    
    );

  return (
    <>
    <div>fishies below: </div>
    {fishesC} 
    </>
    
  )
}
