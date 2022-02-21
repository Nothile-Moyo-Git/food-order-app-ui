import React from "react";
import './Header.css'
import HeaderCartButton from './HeaderCartButton.js'

const Header = (props) => {

    console.log( 'Whats in our classes object' );

return(
    <header>
        <div className="header">
            <h2> Moyo's Munch </h2>
            <HeaderCartButton></HeaderCartButton>
        </div>

        <div className={'main-image'}>
            <img src={process.env.PUBLIC_URL + '/assets/food_2.jpg'} alt=""/>
        </div>
    </header>);
}

export default Header;