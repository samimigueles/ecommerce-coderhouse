import React from 'react';
import Dice from './Dice';
import CartIcon from './CartIcon';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar- ml-5" href="#">
                < Dice />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

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
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default NavBar;