import React from "react";
import Dice from "./Dice";

import { Link } from "react-router-dom";
import cartplus from "../assets/cartplus.svg";
import { useCartContext } from "../../context/CartContext";

function NavBar() {

  const {count} = useCartContext()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <a className="navbar- ml-5" href="#">
        <Dice />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link ml-5" to="/">
              Home <i className="fas fa-tree"></i>{" "}
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ml-5" to="/catalogue">
              Catalogue <i className="fas fa-tags"></i>
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link ml-5" href="#">
              About Us <i className="fas fa-address-book"></i>
            </a>
          </li>
        </ul>

        <Link className="navbar- ml-5" to="/cart">
          <img src={cartplus} alt="logo" style={{ width: 35 }}></img>
          <input type='number' style={{width:35, textAlign:'center'}} value={count} />
          <span className="sr-only">(current)</span>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
