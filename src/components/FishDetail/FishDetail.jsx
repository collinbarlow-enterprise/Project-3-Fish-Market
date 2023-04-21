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
    <div className='FishDetail container' style={{display:'flex', flexDirection:'row' }}>
    {fishParam && (
      <>
        <div className='row'>
          <div className='col'>
            <div>Name: <br/> {fishParam.speciesName}, otherwise known as {fishParam.altName}</div>
            <br/>
            <div>Nutritional Information:</div>
            <ul>
              <li>Calories: {fishParam.calories}</li>
              <li>Protein: {fishParam.protein}</li>
              <li>Total Fat: {fishParam.totalFat}</li>
              <li>Serving Size: {fishParam.servingWeight}</li>
            </ul>
          </div>
          <div className='col'>
            {fishParam.taste ? (<div >How has the taste been described:<br/><br/>{fishParam.taste}</div>) : null}
            <br/>
            {fishParam.color ? (<div>What color should you expect:<br/><br/>{fishParam.color}</div>) : null}
          </div>
          <div className='col'>
            <img src={fishParam.imgUrl} style={{height: '200px', width: '200px'}}/>
          </div>
        </div>
        <div className='row' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <button onClick={() => {backToHome()}} style={{maxWidth: '100px', maxHeight: '75px'}}>Continue Shopping</button>
        </div>
      </>
    )}
  </div>
    
  )
}
