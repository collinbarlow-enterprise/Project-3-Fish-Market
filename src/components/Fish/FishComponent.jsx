import React from 'react'
// import { index } from '../../../controllers/api/fishes-controller'
import IndividualFish from '../IndividualFish/IndividualFish'
import { Link, useNavigate } from 'react-router-dom'

export default function fish({fish, handleAddToOrder, showFishComponent, setShowFishComponent, handleShowFish}) {
  
  // console.log(fish, 'fish on FishComponenet')
  const fishesC = fish.map(f =>
    <IndividualFish 
      key={f._id}
      fishes={f}
      handleAddToOrder={handleAddToOrder}
      showFishComponent={showFishComponent} 
      setShowFishComponent={setShowFishComponent} 
      handleShowFish={handleShowFish}
      
      />    
    );

  return (
    <>
    <div>Freshly Caught Fish: </div>
    <div style={{
      display: 'grid', gridTemplateColumns:'repeat(4, 1fr)'
      , padding: '15px'
      , color: 'black',
      height:'75%',
      width:'75%'
      }}>{fishesC} </div>
    </>
    
  )
}
