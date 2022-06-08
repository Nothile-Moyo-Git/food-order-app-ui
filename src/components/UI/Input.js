import React from "react";
import './Input.scss';

const Input = React.forwardRef((props, ref) => {

    return(
        <div className="input">
            <label htmlFor={ props.input.id }></label>
            <input ref={ ref } {...props.input} id={ props.input.id }/>
        </div>
    );
    
});

export default Input;