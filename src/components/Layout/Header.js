import React from 'react';
import './Header.scss';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {

    return(
        <>
        <header className="header">
            <h2> Moyo's Munch </h2>
            <HeaderCartButton></HeaderCartButton>
        </header>

        <div className="main-image">
         <img src={process.env.PUBLIC_URL + '/assets/food_2.jpg'} alt=""/>
        </div>
        </>
    );

}

export default Header;