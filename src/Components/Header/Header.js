import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/Inventory">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;