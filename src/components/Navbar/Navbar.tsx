import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <div className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <div>
            <Link to="/" className="navbar-brand">Quotes Central</Link>
          </div>
          <div className="">
            <ul className="navbar-nav mr-auto text-primary">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Quotes
                  <i className="bi bi-chat-dots"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/add-quote" className="nav-link">
                  Submit new quote
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Navbar;