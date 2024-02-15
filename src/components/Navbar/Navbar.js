import React, { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "../Search/Search";
import { LanguageContext } from "../Context/languageContext";

const Navbar = () => {
  const fav = useSelector((state) => state.favourite);
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <nav className="navbar  navbar-expand navbar-dark bg-dark fixed-top ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <i
            class="fa-solid fa-film fa-bounce fa-xl"
            style={{ color: "#FFD43B" }}
          ></i>{" "}
          Aflam
        </NavLink>

        <div className="collapse navbar-collapse navbar-expand ">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : ""
                  };
                }}
                to="/"
              >
                <i
                  class="fa-solid fa-house-chimney fa-xs"
                  style={{ color: "#FFD43B" }}
                ></i>{" "}
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                style={({ isActive}) => {
                  return {
                    fontWeight: isActive ? "bold" : ""
                  };
                }}
                to="/favourites"
              >
                <i
                  class="fa-solid fa-crown  fa-sm "
                  style={{ color: "#FFD43B" }}
                ></i>{" "}
                Favourites{" "}
                <span className="text-warning fw-bold">
                  {fav.length < 1 ? `${""}` : fav.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex mx-4">
          <button
            className="btn btn-warning"
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
          >
            {lang}
          </button>
        </div>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
