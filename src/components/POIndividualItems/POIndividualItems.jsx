import React from 'react'

export default function POIndividualItems({items}) {
  console.log(items, 'items in PO')

return (
  <div className='POIndividual'style={{
    display: 'flex',flexDirection: 'row' ,gridTemplateRows:'repeat(4, 1fr)'
    , padding: '45x',
    // margin: '5px'
    }}>
        <img src={items.item.imgUrl} style={{height: '100px', width: '120px', margin:'10px'}}/>
        <div>Name: {items.item.speciesName}<br/>Price per fish: ${items.extPrice} <br/> Quantity: {items.quantity}</div>
        <div>Price per order: ${items.extPrice}</div>
        
        <br />
      </div>
  

)
}
