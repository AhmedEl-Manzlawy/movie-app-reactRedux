import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllMovie, getSearchMovie } from "../../redux/actions/moviesAction";
import { LanguageContext } from "../Context/languageContext";

const Search = () => {

    const [query , setQuery] = useState("")
    const [pageNo] = useState(1)
    const dispatch = useDispatch()
    const {lang} = useContext(LanguageContext)

    const handelForm =(e)=>{
        e.preventDefault()
    }

    const handelSearch =(e)=>{
        e.preventDefault()
        console.log(e.target.value);
        setQuery(e.target.value);
    }

    useEffect(()=>{
      query !== "" ? dispatch(getSearchMovie(query,pageNo , lang)) : dispatch(getAllMovie(pageNo,lang))
    },[query , dispatch , pageNo ,lang])

    

  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <form className="d-flex" onSubmit={handelForm} >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={handelSearch}
          />
          <span className="btn btn-outline-warning" type="submit">
            Search
          </span>
        </form>
      </div>
    </nav>
  );
};

export default Search;
