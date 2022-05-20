import React, { useState, useEffect } from "react";
import Loader from "../UI/Loader";
import PinkCard from "../UI/PinkCard";
import './AvailableMeals.scss';
import MealItem from "./MealItem/MealItem"

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

  const [meals , setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

const mealsList = DUMMY_DATA.map((meal) => {
    return(
        <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItem>
    )
});

useEffect(() => {

  const fetchData = async() => {

    setIsLoading(true);
    const data = await fetch('https://meals-backend-755dc-default-rtdb.europe-west1.firebasedatabase.app/.json');
    const json = await data.json();

    setMeals(json);
    setIsLoading(false);

  }

 fetchData();

},[]);

    return(
        <PinkCard>
          {  isLoading && <Loader/> }
          { !isLoading &&  <ul>{mealsList}</ul>  }
        </PinkCard>
    );
} 

export default AvailableMeals;