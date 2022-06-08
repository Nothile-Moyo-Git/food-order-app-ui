import useInput from '../../hooks/useInput';
import './CheckoutForm.scss';

// Function to validate the name input
// Functions must be calls when passed to a custom hook, not as expressions. Therefore we define them in a more vanilla way
const validInput = (value) => { if(value.trim().length >= 3){ return true; } else { return false; } }

// Function to validate phone number 
const validPhone = (value) => { if(value.trim().length >= 10){ return true; } else { return false; } }

// Function to use regular expressions to validate email address
const validEmail = (emailAddress) =>{

    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) 
      {
  
        return true;
  
      }else{
  
        return false;
        
      }
  
  }

// Since we evaluate on every re-render, we use this to skip entries
const skipValidation = () => { return true; }

// Checkout form component
const CheckoutForm = (props) => {

    // Allocating data in memory using the object of key value pairs we return from useInput
    // Validation functions are passed through since we call the hook on every input update, therefore we can validate on every re-evaluation
    const {
        value: name, 
        updateValue: nameChangeHandler,
        blurValue: nameBlurHandler,
        resetInput: resetName,
        invalid: nameInputInvalid,
        isValueValid: nameValid
    } = useInput(validInput);

    const {
        value: email,
        updateValue: emailChangeHandler,
        blurValue: emailBlurHandler,
        resetInput: resetEmail,
        invalid: emailInputInvalid,
        isValueValid: emailValid
    } = useInput(validEmail);

    const {
        value: phone,
        updateValue: phoneChangeHandler,
        blurValue: phoneBlurHandler,
        resetInput: resetPhone,
        invalid: phoneInputInvalid,
        isValueValid: phoneValid
    } = useInput(validPhone);

    const {
        value: requests,
        updateValue: requestsChangeHandler,
        blurValue: requestsBlurHandler,
        resetInput: resetRequests
    } = useInput(skipValidation);

    const submitHandler = (event) => {
        event.preventDefault();

        // Reset our inputs and set validate them so they're not checked and auto fail once reset
        resetName();
        resetEmail();
        resetPhone();
        resetRequests();
    }

    const formValid = nameValid && emailValid && phoneValid;

    // JSX for our checkout form, we're using the values from our custom hook
    return(
        <section>

            <h2 className="checkout-title">Checkout</h2>

            <form method="post" className={`${props.className}`} onSubmit={ submitHandler }>

                <div className={`checkout-form__input ${ nameInputInvalid && 'checkout-form__input--invalid' }`}>
                    <label htmlFor="name">{`${ nameInputInvalid ? 'Error: Name should be longer than 3 characters' : 'Name'}`}</label>
                    <input 
                    type="text" 
                    id="name"
                    value={name}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    />
                </div>

                <div className={`checkout-form__input ${ emailInputInvalid && 'checkout-form__input--invalid' }`}>
                    <label htmlFor="email">{`${ emailInputInvalid ? 'Error: Email is invalid' : 'Email' }`}</label>
                    <input 
                    type="email" 
                    id="email"
                    value={email}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    />
                </div>

                <div className={`checkout-form__phone ${ phoneInputInvalid && 'checkout-form__phone--invalid' }`}>
                    <label htmlFor="number">{`${ phoneInputInvalid ? 'Error: Phone Number Must be at least 10 characters' : 'Phone Number:' }`}</label>
                    <div className={`checkout-form__phone-wrapper ${ phoneInputInvalid && 'checkout-form__phone-wrapper--invalid' }`}>
                        <span>+44</span>
                        <input
                        type="number"
                        id="number"
                        value={phone}
                        onChange={phoneChangeHandler}
                        onBlur={phoneBlurHandler}
                        />
                    </div>
                </div>

                <div className="checkout-form__input">
                    <label htmlFor="requests">Requests</label>
                    <textarea
                    id="requests"
                    value={requests}
                    rows="5"
                    onChange={requestsChangeHandler}
                    onBlur={requestsBlurHandler}
                    />
                </div>

                <input type="submit" className={`checkout-form__submit ${formValid && 'checkout-form__submit--valid'}`}/>

            </form>

        </section>
    );
}

export default CheckoutForm;