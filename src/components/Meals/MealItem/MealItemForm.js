import React, { useState } from "react";
import Input from "../../UI/Input";
import './MealItemForm.scss';

const MealItemForm = (props) => {

    const [itemCount, setItemCount] = useState(1);

    const decrement = (event) => {

        event.preventDefault();
        itemCount > 1 && setItemCount(itemCount - 1);

    }

    const increment = (event) => {

        event.preventDefault();
        itemCount < 5 && setItemCount(itemCount + 1);

    }

    const handleSubmit = (event) => {
        
        event.preventDefault();
        // Input is found in event.target[1].value;

    }

    return(
        <form onSubmit={ handleSubmit }>

                <button className="decrement" onClick={ decrement } alt="Reduce Items"> - </button>
                <Input label="Amount" input={{
                    id: `${props.id}-amount`,
                    type: "number",
                    min: 1,
                    max: 5,
                    step: 1,
                    readOnly: true,
                    value: itemCount,
                }} readOnly={true} />
                <button className="increment" onClick={ increment } alt="Increase Items"> + </button>

            <button className="submit" type="submit"> Add To Cart </button>
        </form>
    );

}

export default MealItemForm;