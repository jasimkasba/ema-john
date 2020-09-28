import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className = 'header'>
            <img src={logo} alt=""/>

            <nav>
                <a href="Shop">Shop</a>
                <a href="review">Order Riview</a>
                <a href="inventory">Manage Inventory</a>
            </nav>
        </div>
        
    );
};

export default Header;