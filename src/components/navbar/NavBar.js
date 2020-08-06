import React from 'react';
import dice from '../navbar/dice.svg';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar- ml-5" href="#">
                <img src={dice} alt="logo" style={{ width:35 }} />
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
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-info my-2 my-sm-0" type="submit" style={{color:'brown'}}>Search</button>
                </form>
            </div>
        </nav>
    )
}

export default NavBar;