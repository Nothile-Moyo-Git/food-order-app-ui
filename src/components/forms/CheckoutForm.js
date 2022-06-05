import useInput from '../../hooks/useInput';
import './CheckoutForm.scss';

// Function to validate the name input
const validInput = (value) => { if(value.trim().length >= 3){ return true; } else { return false; } }

// Function to validate phone number 
const validPhone = (value) => { if(value.trim().length < 10){ return true; } else { return false; } }

// Fucntion to use regular expressions to validate email address
const validEmail =  (emailAddress) =>{

    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) 
      {
  
        return true;
  
      }else{
  
        return false;
        
      }
  
  }

// Checkout form component
const CheckoutForm = (props) => {

    // Allocating data in memory using the object of key value pairs we return from useInput
    // Validation functions are passed through since we call the hook on every input update, therefore we can validate on every re-evaluation
    const {
        value: name, 
        updateValue: nameChangeHandler,
        blurValue: nameBlurHandler,
        validValue: nameValid,
    } = useInput(validInput);

    const {
        value: email,
        updateValue: emailChangeHandler,
        blurValue: emailBlurHandler,
    } = useInput(validEmail);

    const {
        value: phone,
        updateValue: phoneChangeHandler,
        blurValue: phoneBlurHandler
    } = useInput(validPhone);

    const {
        value: requests,
        updateValue: requestsChangeHandler,
        blurValue: requestsBlurHandler
    } = useInput(validInput);

    const submitHandler = (event) => {
        event.preventDefault();
    }

    // JSX for our checkout form, we're using the values from our custom hook
    return(
        <form method="post" className={`${props.className}`} onSubmit={ submitHandler }>

            <div className="checkout-form__two-inputs">
                <div className={`checkout-form__input ${!nameValid && 'checkout-form__invalid'}`}>
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    id="name"
                    value={name}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    />
                </div>

                <div className="checkout-form__input">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email"
                    value={email}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    />
                </div>
            </div>

            <div className="checkout-form__number">
                <label htmlFor="number">Phone Number</label>
                <input
                type="number"
                id="number"
                value={phone}
                onChange={phoneChangeHandler}
                onBlur={phoneBlurHandler}
                />
            </div>

            <div className="checkout-form__textarea">
                <label htmlFor="requests">Requests</label>
                <textarea
                id="requests"
                value={requests}
                rows="5"
                onChange={requestsChangeHandler}
                onBlur={requestsBlurHandler}
                />
            </div>

        </form>
    );
}

export default CheckoutForm;