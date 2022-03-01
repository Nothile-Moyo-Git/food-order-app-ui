import React from "react";
import './PinkCard.scss';

const PinkCard = (props) => {

    return(<div className="pink-card"> {props.children} </div>);
}

export default PinkCard;