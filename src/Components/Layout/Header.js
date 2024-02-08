import React from 'react';
import mealImage from "../../assests/meal.jpg";
import "./Header.css"
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
        <header className='header'>
          <h1>Meals</h1>
         <HeaderCartButton/>
        </header>
        <div className='main-image'>
          <img src={mealImage} alt='meal.jpg'/>
        </div>
    </React.Fragment>
  )
}

export default Header