import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as fishAPI from '../../utilities/fish-api'

export default function FishDetail({ param }) {
  const [fishDetail, setFishDetail] = useState([]);
  const navigate = useNavigate();

  const [resetComponent, setResetComponent] = useState(false)

  async function getFishDetail() {
    try {
      const fish = await fishAPI.getAll();
      setFishDetail(fish);
    } catch (error) {
      console.error(error, 'error for getFish');
    }
  }

  useEffect(function () {
    getFishDetail();
  }, []);


  function backToHome() {
    navigate('/');
  }

  const fishParam = fishDetail.find((item) => item.speciesName === param);

  return (
    <div className='FishDetail container'>
      {fishParam && (
        <>
          <div className=''>
            <div className=''>
              <div>Name: <br /> {fishParam.speciesName}, otherwise known as {fishParam.altName}</div>
              <br />
              <div>Nutritional Information:</div>
              <ul>
                <li>Calories: {fishParam.calories}</li>
                <li>Protein: {fishParam.protein}</li>
                <li>Total Fat: {fishParam.totalFat}</li>
                <li>Serving Size: {fishParam.servingWeight}</li>
              </ul>
            </div>
            <div className=''>
              {fishParam.taste ? (<div >How has the taste been described:<br /><br />{fishParam.taste}</div>) : null}
              <br />
              {fishParam.color ? (<div>What color should you expect:<br /><br />{fishParam.color}</div>) : null}
            </div>
            <div className=''>
              <img src={fishParam.imgUrl}/>
            </div>
          </div>
          <div className='row' >
            <button onClick={() => { backToHome() }}>Continue Shopping</button>
          </div>
        </>
      )}
    </div>

  )
}
