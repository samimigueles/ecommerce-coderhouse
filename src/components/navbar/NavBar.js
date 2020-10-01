import React from "react";
import Dice from "./Dice";

import { Link, NavLink } from "react-router-dom";
import cartplus from "../assets/cartplus.svg";
import { useCartContext } from "../../context/CartContext";

function NavBar({ categories }) {
  const { count } = useCartContext();

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
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle ml-5"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="true"
              href="#"
            >
              Categories <i className="fas fa-tags"></i>
            </a>
            <div className="dropdown-menu ml-5">
              {categories.map((c, index) => (
                <li key={index}>
                  <NavLink to={`/categories/${c.id}`}>{c.name}</NavLink>
                </li>
              ))}
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link ml-5" to="/about">
              About Us <i className="fas fa-address-book"></i>
            </Link>
          </li>
        </ul>

        <Link className="navbar- ml-5" to="/cart">
          <img src={cartplus} alt="logo" style={{ width: 35 }}></img>
          <input
            type="number"
            style={{ width: 35, textAlign: "center" }}
            value={count}
          />
          <span className="sr-only">(current)</span>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
