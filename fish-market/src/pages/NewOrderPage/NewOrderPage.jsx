import React from 'react'
import FishComponent from '../../components/Fish/FishComponent'

export default function NewOrderPage({fish}) {
  console.log(fish, 'fish on NewOrder')
  return (
    <>
    <br />
    <>logo</>
    <br />
  
    <>current cart - does this display current cart or link to cart page?</>
    <br />
    <h1>Order Fish Here - New Order Page</h1>
    <>categories - is this a separate component?</>
    <br />
    <br />
   <FishComponent fish={fish}/>
    
    
    </>
    
  )
}
