import React from 'react'
import { useState, useEffect } from 'react'
import * as fishAPI from '../../utilities/fish-api'

export default function POIndividualItems({item, quantity}) {
  console.log(item, 'item in PO')
//   console.log(quantity, 'quantity in PO')
const [fishDetail, setFishDetail] = useState([]);

async function getFishDetail() {
try {
const fish = await fishAPI.getAll();
setFishDetail(fish);
console.log(fish, 'after set, fish in PO');
} catch (error) {
console.error(error, 'error for getFish');
}}

useEffect(function() {
getFishDetail();
// console.log(fishDetail, "fishDetail after setter function")
}, []);   

function findFish(item) {
  return fishDetail.find((f) => f._id === item);
}

const foundFish= findFish(item) // saves the returned fish object in foundFish
console.log(foundFish, 'foundFish in PO')

    return (
    <div>
        <div> Item ID: {item}</div>
        {foundFish && ( 
          <div>
        <div> Name: {foundFish.speciesName}</div>
        <div> Price per fish: ${foundFish.price}</div>
        <div> Price per order: ${(foundFish.price*quantity)}</div>
        <div> Item ID: {item}</div>
        <div> Quantity: {quantity} </div>
        <img src={foundFish.imgUrl} style={{height: '200px', width: '200px'}}/>
          </div>
        )}
    </div>
  )
}
