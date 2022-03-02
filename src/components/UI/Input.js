import React from "react";
import './Input.scss';

const Input = (props) => {

    return(
        <div className="input">
            <label htmlFor={ props.input.id }></label>
            <input {...props.input}/>
        </div>
    );
}

export default Input;