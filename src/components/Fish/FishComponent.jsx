import React from 'react'
import IndividualFish from '../IndividualFish/IndividualFish'

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
      <div>Freshly Caught Fish: </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '15px', color: 'black', height: '75%', width: '75%'}}>{fishesC} </div>
    </>
  )
}
