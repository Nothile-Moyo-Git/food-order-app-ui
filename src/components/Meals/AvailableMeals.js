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

  const mealsList = meals.map((meal) => {
      return(
          <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItem>
      )
  });

  // const mealsList = DUMMY_DATA.map((meal) => {
  //     return(
  //         <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItem>
  //     )
  // });

useEffect(() => {

  // Execute our async function so we can execute this once once await is completed
  const fetchData = async() => {

    // Render loading animation
    setIsLoading(true);

    try{
    // Get our meals from the DB
    const data = await fetch('https://meals-backend-755dc-default-rtdb.europe-west1.firebasedatabase.app/.json');

    // If we get a response but it's our result is not parsable
    if(!data.ok){
      throw new Error(`API Call responded with a code of: ${data.status}. You can find out more here in order to resolve the issue: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status`);
    }

    // Convert to JSON object
    const json = await data.json();

    // Create local array for formatting since it's only used once
    let result = [];

    // Loop though an object based on its key, then push to our array so we can use it in mealsList
    Object.keys(json).map((key) => {

      // Push our new object in our array referencing values based on our key
      result.push({
        id: key, 
        description: json[key]['description'],
        name: json[key]['name'], 
        price: json[key]['price'],
      });

    });

    // Set our meals so we can update MealsList
    setMeals(result);

    // End out loading animation in successful call
    setIsLoading(false);
    }catch(error){
      throw new Error(error);
    }

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