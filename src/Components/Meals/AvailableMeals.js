import React from 'react';
import "./AvailableMeals.css"
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
const AvailableMeals = (props) => {

    const mealList = DUMMY_MEALS.map(m=>{
        return <MealItem key={m.id} id={m.id} name={m.name} description={m.description} price={m.price}/>
    })
  return (
    <section className='meals'>
       <Card>
        <ul>
        {mealList}
        </ul>
        </Card>
    </section>
  )
}

export default AvailableMeals