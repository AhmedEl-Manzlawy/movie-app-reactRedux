import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieToFavourite,
  removeMovieFromFavourite,
} from "./../../redux/actions/actionFavourite";

const MovieCard = ({ movie }) => {
  const favourite = useSelector((state) => state.favourite);
  const dispatch = useDispatch();

  const isFav = (movieId) => {

    return favourite.find((movie) => movie.id === movieId);
  };
  const addFav = () => {  
    dispatch(addMovieToFavourite(movie));
  };

  const removeFav = (id) => {
    dispatch(removeMovieFromFavourite(id));
  };

  return (
    <div className="col">
      <div className="card border-0 h-100 position-relative movieImg">
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          className="card-img-top "
          style={{ height: 300 }}
          alt={movie.title}
        />
        <div
          className="card-body text-light"
          style={{ backgroundColor: "#2f2f2f" }}
        >
          <p className="card-title text-center p-0 m-0">
            {movie.title.slice(0, 20)}
          </p>
          <div
            className="card-title text-center rounded bg-secondary position-absolute"
            style={{ top: -10, left: 70, width: 70, height: 25 }}
          >
            <p>{movie.vote_average.toFixed(1)} ⭐</p>
          </div>
        </div>

        {/* icon info and Fav */}

        {/* fav */}

        <div className="overlay-left">
          {!isFav(movie.id) ? (
            <i
              onClick={addFav}
              className="fa-regular fa-heart large-icon "
              style={{ color: "blue" }}
            ></i>
          ) : (
            <i
              onClick={() => removeFav(movie.id)}
              className="fa-solid fa-heart large-icon "
              style={{ color: "red" }}
            ></i>
          )}
        </div>

        {/* info */}
        <div className="overlay-right ">
          <Link to={`/movie/${movie.id}`}>
            <i
              className="fa-solid fa-circle-info large-icon  "
              style={{ color: "darkred" }}
            ></i>
          </Link>
        </div>


      </div>
    </div>
  );
};

export default MovieCard;
