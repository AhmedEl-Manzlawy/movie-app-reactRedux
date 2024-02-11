import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./../components/Movie/MovieCard";

const Favourites = () => {
  const favouritesMovie = useSelector((stata) => stata.favourite);
  return (
    <>
      {
        favouritesMovie.length > 0 ? (
          <div className="container-fluid row row-cols-1 row-cols-md-6 g-3 p-4 " style={{ minHeight: "100vh" }}>
      {favouritesMovie.map((movie) => {
        return (
          <div className="col mb-4" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        );
      })}
    </div>
        ):(
          <div className="container-fluid text-light g-3 p-4 " style={{ minHeight: "100vh" }}>
            <h1> NO Favourite Movie Yet</h1>
          </div>
        )
      }
    </>
  );
};

export default Favourites;
