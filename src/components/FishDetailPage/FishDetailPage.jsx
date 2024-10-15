import React from 'react'
import { useParams } from 'react-router-dom'
import FishDetail from '../FishDetail/FishDetail'
import '../FishDetail/FishDetail.css'

export default function FishDetailPage({dontShowFishComponent, setShowFishComponent, handleShowFish}) {
    const {param} = useParams();
  return (
    <div className="fishDetailComponent"><FishDetail param={param} dontShowFishComponent={dontShowFishComponent} setShowFishComponent={setShowFishComponent} handleShowFish={handleShowFish}/></div>
  )
}
