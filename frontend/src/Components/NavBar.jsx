import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/NavStyle.css";

const Navbar = () => {
  return (
    <nav className='Nav'>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active" >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/classes" activeClassName="active" >
            Classes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;