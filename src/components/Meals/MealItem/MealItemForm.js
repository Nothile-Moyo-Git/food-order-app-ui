import React, { useReducer } from "react";
import Input from "../../UI/Input";
import './MealItemForm.scss';

// Our initial state, we use this for our initial dom render with our meals list
const initialState = {value: 1};

// Reducer function, we're using this instead of 2 different states to clean up our code, reducers allow for multiple ways to set states
const reducer = (state, action) => {

    // Add an item to the count if its less than 5
    if( (action.type === 'increment') && (state.value < 5) ){ return{value: state.value + 1 }; }

    // Subtract an item from the count if its less than 5
    if( (action.type === 'decrement') && (state.value > 1) ){ return{value: state.value - 1 }; }

    // If we go above or below our boundaries, we make no changes to the state, so the user sees the same value
    else{ return{value: state.value}; }
}

// Meal item functional component definition
const MealItemForm = (props) => {

    const handleSubmit = (event) => {
        
        event.preventDefault();
        // Input is found in event.target[1].value;

    }

    // Create a reducer, we're using a jsx object called countState we're setting to value:1 
    const [countState, dispatcher] = useReducer(reducer, initialState);

    return(
        <form onSubmit={ handleSubmit }>

                <button className="decrement" onClick={ () => dispatcher({ type:'decrement' }) } alt="Reduce Items"> - </button>

                { /* For reference, padding a jsx object with parameters are passed through to the component level, setting these paremeters for us */ }
                <Input label="Amount" input={{
                    id: `${props.id}-amount`,
                    type: "number",
                    min: 1,
                    max: 5,
                    step: 1,
                    readOnly: true,
                    value: countState.value,
                }} readOnly={true} />

                <button className="increment" onClick={ () => dispatcher({type: 'increment' }) } alt="Increase Items"> + </button>

            <button className="submit" type="submit"> Add To Cart </button>
        </form>
    );

}

export default MealItemForm;