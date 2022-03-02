import React from "react";
import Input from "../../UI/Input";
import './MealItemForm.scss';

const MealItemForm = (props) => {

    return(
        <form>
            <Input label="Amount" input={{
                id: `${props.id}-amount`,
                type: "number",
                min: 1,
                max: 5,
                step: 1,
                defaultValue: 1,
            }}/>
            <button> + </button>
        </form>
    );

}

export default MealItemForm;