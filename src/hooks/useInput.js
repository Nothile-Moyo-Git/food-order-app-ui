import { useState } from "react";

const useInput = (validationFunction) => {

    const [enteredValue, setEnteredValue] = useState('');

    const valueChangeHandler = (event) => {
        event.preventDefault();
        setEnteredValue(event.target.value);
    }

    const isValid = validationFunction(enteredValue);
    console.log(isValid);

    const valueBlurHandler = (event) => {
        event.preventDefault();
    }

    // Return
    return(
        {
            value: enteredValue,
            updateValue : valueChangeHandler,
            blurValue : valueBlurHandler,
            validValue: isValid
        }
    );
}

export default useInput;