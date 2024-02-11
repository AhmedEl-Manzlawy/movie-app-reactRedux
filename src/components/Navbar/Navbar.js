
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {

  const fav = useSelector(state => state.favourite)


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
                Favourites <span className="text-danger fw-bold">{fav.length < 1 ? `${""}` : fav.length}</span>
              </Link>
            </li>
          </ul>
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;
