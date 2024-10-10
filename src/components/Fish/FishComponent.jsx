import React from 'react'
import IndividualFish from '../IndividualFish/IndividualFish'
import './Fish.css'

export default function fish({ fish, handleAddToOrder, showFishComponent, setShowFishComponent, handleShowFish }) {

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
      <div className="fishCardBackGround">{fishesC} </div>
    </>
  )
}
