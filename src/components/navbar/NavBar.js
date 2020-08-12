import React from 'react';
import Dice from './Dice';
import CartIcon from './CartIcon';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar- ml-5" href="#">
                < Dice />
            </a>

            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <a className="nav-link ml-5" href="#">Home <i className="fas fa-tree"></i> <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-5" href="#">Catalogue <i className="fas fa-tags"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-5" href="#">About Us <i className="fas fa-address-book"></i></a>
                    </li>
                </ul>
                
                <a className="navbar- ml-5" href="#">
                    < CartIcon />
                </a>
                
            </div>
        </nav>
    )
}

export default NavBar;