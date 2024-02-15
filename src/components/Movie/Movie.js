/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie, getSearchMovie } from "../../redux/actions/moviesAction";
import { LanguageContext } from "../Context/languageContext";
import Pagination from "../Pagination/Pagination";
import { PageNumberContext } from "../Context/pageNumberContext";

const Movie = () => {
  // const [pageNo, setPageNo] = useState(1);
  const [query] = useState("");
  const {lang} =useContext(LanguageContext);
  const {pageNo} =useContext(PageNumberContext)
  const dispatch = useDispatch()
  const reduxMovie = useSelector(state => state.movie)



  useEffect(() => {
    query === "" ? dispatch(getAllMovie(pageNo ,lang)) : dispatch(getSearchMovie(query,pageNo , lang));
  },[query , pageNo, dispatch , lang]);;

  return (
    <>

      {/* top pagination */}
      {reduxMovie.length > 0 && (
        <Pagination />
      )}

      {/* show Movie */}
      {reduxMovie.length > 0 && (
        <div className=" container row row-cols-1 row-cols-md-5 g-4 m-auto">
          {reduxMovie.map((movie, idx) => {
            return <MovieCard movie={movie} key={idx} />;
          })}
        </div>
      )}

      {/* bottom pagination */}
      {reduxMovie.length > 0 && (
        <Pagination />
      )}
    </>
  );
};

export default Movie;
