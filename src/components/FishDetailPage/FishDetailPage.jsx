import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import FishDetail from '../FishDetail/FishDetail'

export default function FishDetailPage({dontShowFishComponent, setShowFishComponent, handleShowFish}) {
    const {param} = useParams();
  return (
    <div><FishDetail param={param} dontShowFishComponent={dontShowFishComponent} setShowFishComponent={setShowFishComponent} handleShowFish={handleShowFish}/></div>
  )
}
