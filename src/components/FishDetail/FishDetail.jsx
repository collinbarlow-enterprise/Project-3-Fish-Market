import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as fishAPI from '../../utilities/fish-api'




export default function FishDetail({showFishComponent, setShowFishComponent, handleShowFish, param}) {
  console.log(showFishComponent, 'showFishComponent State on FishDetail Load')
  const [fishDetail, setFishDetail] = useState([]);
  const navigate = useNavigate();
    async function getFishDetail() {
    try {
    // console.log('made it inside getFish')
    const fish = await fishAPI.getAll();
    // console.log(fish, 'before set, fish in getFish function on app.jsx')
    setFishDetail(fish);
    // console.log(fish, 'after set, fish in getFish function on app.jsx');
  } catch (error) {
    console.error(error, 'error for getFish');
  }}

  useEffect(function() {
    // console.log('useEffect has been called')
    getFishDetail();
  }, []);  

//   console.log(fishDetail, 'fishDetail in fishDetail' )
function backToHome(){
// handleShowFish(setShowFishComponent)
// console.log(showFishComponent, 'showFishComponent in FishDetail')
navigate('/orders/new');
}

  // const { param } = useParams();
//   console.log(param, 'param on fishDetail')

  const fishParam = fishDetail.find((item) => item.speciesName === param);
//   console.log(fishParam, 'fishParam on fishDetail')

  return (
    <div>
      {/* using && like a ternary that evaluates if a statement is true before rendering. Keeps the code below from rendering before api data has finished loading */}
      {fishParam && (
        <>
          <div>Name: {fishParam.speciesName}, otherwise known as {fishParam.altName}</div>
          <div>Nutritional Information: </div>
            <ul>
                <li>Calories: {fishParam.calories}</li>
                <li>Protein: {fishParam.protein}</li>
                <li>Total Fat: {fishParam.totalFat}</li>
                <li>Serving Size: {fishParam.servingWeight}</li>
            </ul>
            <div>How has the taste been described: <br/>{fishParam.taste}</div>
            <div>What color should you expect: {fishParam.color}</div>
            <img src={fishParam.imgUrl} style={{height: '200px', width: '200px'}}/>
            <button onClick={() => {backToHome()}}>Continue Shopping</button>
        </>
      )}
    </div>
  )
}
