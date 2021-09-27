import React from 'react';
import './Header.css'
import logo from '../../images/react-logo.png'

const Header = () => {
    return (
        <div className="header d-flex justify-content-between">
            <div className="header-text">
                <p><b>Nov 15, 2021</b></p>
                <h1>React Virtual Con'21</h1>
                <h5> An International conference for the React Community to meet, inspire and learn.</h5>
                <br />
                <h5>Total Budget: <b>1 Million</b> </h5>
            </div>

            <div>
                <img className="logo" src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;