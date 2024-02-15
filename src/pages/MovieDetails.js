// import axios from "axios"
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from "../redux/actions/moviesAction";
import { LanguageContext } from './../components/Context/languageContext';

const MovieDetails = () => {
  // const [movieDetail] = useState({});
  const movieDetail = useSelector(state => state.movieDetail)
  const dispatch = useDispatch()
  const { id } = useParams();
  const {lang} = useContext(LanguageContext)

  //call Api using axios
  useEffect(() => {
    dispatch(getMovieDetails(id,lang))
  },[dispatch,lang,id]);

  return (
    <div className="container card py-3 text-light h-100" style={{backgroundColor:"#3f3f3f"}}>
      <div className="row g-0 ">
        <div className="col-md-12">
          <img
            src={"https://image.tmdb.org/t/p/w500/" + movieDetail.backdrop_path}
            className="w-100 rounded mb-4 "
            alt={movieDetail.title}
            style={{ height:"60vh"}}
          />
        </div>
        <div className="col-md-4">
          <img
            src={"https://image.tmdb.org/t/p/w500/" + movieDetail.poster_path}
            className="img-fluid rounded h-75 mx-3"
            alt={movieDetail.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-center fs-1 border-bottom">{movieDetail.title}</h5>
            <h4 >Overview :</h4>
            <p className="card-text mx-4 text-center">
               {movieDetail.overview}
            </p>
            <p className="card-text">
              <span className="fs-5">Released :</span> {movieDetail.release_date}
            </p>
            <p className="card-text">
              <span className="fs-5">Duration :</span>
              {movieDetail.runtime} m
            </p>
            <p className="card-text">
              <span className="fs-5">Rate :</span>
              {Math.round(movieDetail.vote_average)}⭐
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
