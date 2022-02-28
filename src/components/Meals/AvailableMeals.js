import React from "react";
import './AvailableMeals.scss';

const DUMMY_DATA = [
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

const mealsList = [];

DUMMY_DATA.map((meal) => {
    return(
        mealsList.push(
        <li key={ meal.id }>

            <div className="text-align-left meal-item">
                <p className="dish-title"> {meal.name} </p>
                {meal.description}
                <br/>
                £{meal.price}
            </div>

            <div className="add-to-cart">
                Add To Cart
            </div>

        </li>)
    ); 
}); 

    return(
        <section className="available-meals">
            <ul>
                {mealsList}
            </ul>
        </section>
    );
} 

export default AvailableMeals;