import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as fishAPI from '../../utilities/fish-api'
import './FishDetail.css'

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
    <div className='fishDetailComponent2'>
      {fishParam && (
        <>
          <div className='fishDetailContainer'>

              <div className="fishName">
                <h3>{fishParam.speciesName} // {fishParam.altName}</h3>
              </div>

              <div className="nutritionalInformation">
                <h3>Nutritional Information</h3>
                <ul>
                  <li>Calories: {fishParam.calories}</li>
                  <li>Protein: {fishParam.protein}</li>
                  <li>Total Fat: {fishParam.totalFat}</li>
                  <li>Serving Size: {fishParam.servingWeight}</li>
                </ul>
              </div>
         

            <div className='tasteColor'>
              {fishParam.taste &&
                (<div>{fishParam.taste}</div>)}
              {fishParam.color &&
                (<div>{fishParam.color}</div>)}
            </div>
            <div className='fishImage'>
              <img src={fishParam.imgUrl} />
            </div>

            <div className='homeButton' >
              <button onClick={() => { backToHome() }}>Continue Shopping</button>
            </div>
            </div>
        </>
      )}
    </div>
  )
}
