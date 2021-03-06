import { useState } from "react";

const useInput = (validationFunction) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    // Repeatable change handler. Currently sets the state for enteredValue. We pass this back in our return and allocate it for each form input we have
    const valueChangeHandler = (event) => {
        event.preventDefault();
        setEnteredValue(event.target.value);
    }

    // Repeatable blur handler, currently does nothing
    const valueBlurHandler = (event) => {
        event.preventDefault();
        setIsTouched(true);
    }

    // Reset our touched state on form submission so our inputs register as valid even though we're emptying them
    const resetInput = () => {
        setIsTouched(false);
        setEnteredValue('');
    }

    // Since our hook re-evaluates on every update due to valueChangeHandler, we validate it here.
    // This serves 2 purposes, it's more optimal than setting and updating states, and it also reflects the currently value inside of state
    const isValid = validationFunction(enteredValue);

    const inputInvalid = !isValid && isTouched;

    // Return an object of key value pairs which we assign to our variables in checkout form
    // The keys for these pairs are used, and the data has a new allocation in memory upon instantiation in another variable
    return(
        {
            value: enteredValue,
            updateValue : valueChangeHandler,
            blurValue : valueBlurHandler,
            resetInput: resetInput,
            isValueValid: isValid,
            invalid: inputInvalid
        }
    );
}

export default useInput;