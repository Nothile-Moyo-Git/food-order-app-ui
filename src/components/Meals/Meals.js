import React from "react";
import AvailableMeals from "./AvailableMeals";
import './Meals.scss';
import MealsSummary from './MealsSummary';

const Meals = (props) => {
return(<div className="meals">
        <MealsSummary/>
        <AvailableMeals/>
       </div>);
}

export default Meals;