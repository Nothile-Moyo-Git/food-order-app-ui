import React from 'react';
import './Header.scss';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {

    return(
        <>

            <header className="header">
                <h2> Moyo's Munch </h2>
                <HeaderCartButton showModal={ props.showModal }/>
            </header>
            
            <div className="main-image">
                <img src={process.env.PUBLIC_URL + '/assets/food_2.jpg'} alt="The best munch in town!"/>
                <div className="image-skew"> Skew </div>
            </div>

        </>
    );

}

export default Header;