
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <nav className="navbar  navbar-expand navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Aflam
        </Link>

        <div className="collapse navbar-collapse navbar-expand ">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/favourites"
              >
                Favourites
              </Link>
            </li>
          </ul>
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;
