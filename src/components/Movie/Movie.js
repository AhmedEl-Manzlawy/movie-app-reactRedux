/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { DB_URL, MOVIE_KEY } from "../../Api/api";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [query, setQuery] = useState("");

  const getAllMovie = () => {
    axios
      .get(`${DB_URL}/popular?api_key=${MOVIE_KEY}&page=${pageNo}`)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

  const getMovieSearch = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_KEY}&query=${query}&page=${pageNo} `
      )
      .then(res => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

  const handelForm = (e) => {
    e.preventDefault();
  };

  const handelSearch = (e) => {
    e.preventDefault()
    setQuery(e.target.value);
    console.log(e.target.value);
  };

 

  useEffect(() => {
    query === "" ? getAllMovie() : getMovieSearch();
  },[query , pageNo]);

  const handelPrev = () => {
    if (pageNo > 1) setPageNo(pageNo - 1);
    console.log(pageNo, "prev");
  };

  const handelNext = () => {
    if (pageNo < 20) setPageNo(pageNo + 1);
    console.log(pageNo, "next");
  };

  return (
    <>
      {/* search  */}

      <form className="container py-4 " onSubmit={handelForm}>
        <div className="input-group">
          <span className="input-group-text bg-primary" id="basic-addon1">
            Search
          </span>
          <input
            type="text"
            className="form-control"
            value={query}
            placeholder="Search Movie"
            onChange={handelSearch}
          />
        </div>
      </form>

      {/* top pagination */}
      {movies.length > 0 && (
        <div className="d-flex justify-content-center pt-4">
          <button className="btn btn-dark" onClick={handelPrev}>
            Prev
          </button>
          <span className="mx-4 my-auto text-light">{pageNo}</span>
          <button className="btn btn-dark" onClick={handelNext}>
            Next
          </button>
        </div>
      )}

      {/* show Movie */}
      {movies.length > 0 && (
        <div className=" container row row-cols-1 row-cols-md-5 g-4 m-auto">
          {movies.map((movie, idx) => {
            return <MovieCard movie={movie} key={idx} />;
          })}
        </div>
      )}

      {/* bottom pagination */}
      {movies.length > 0 && (
        <div className="d-flex justify-content-center py-4">
          <button className="btn btn-dark" onClick={handelPrev}>
            Prev
          </button>
          <span className="mx-4 my-auto text-light">{pageNo}</span>
          <button className="btn btn-dark" onClick={handelNext}>
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Movie;
