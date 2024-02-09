import React from 'react';
import "./MealItem.css"

const MealItem = (props) => {
    const price = `Rs${props.price.toFixed(2)}`
  return (
    <li>
     <div className='meal'>
        <h3>{props.name}</h3>
         <div className='description'>{props.description}</div>
         <div className='price'>{price}</div>
     </div>
     <div>
        
     </div>
    </li>
  )
}

export default MealItem