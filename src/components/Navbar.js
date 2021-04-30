import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__text">
                <div className="logo"> 
                <img src="./img/logo.png" alt="logo" />
                </div>
                <ul >
                    <li className="navbar__ul">
                        <li><a href="#header">Home</a>
                        </li>
                        <li><a href="#menu">Menu</a>
                        </li>
                        <li><a href="#shop">Shop</a>
                        </li>
                        <li><a href="/">News</a>
                        </li>
                        <li><a href="/">Contact</a>
                        </li>


                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Navbar;