import { MOVIE_KEY } from "../../Api/api";
import { axiosInstance } from "../../Network/axiosConfig";
import { GET_ALL_MOVIE, MOVIE_DETAIL, SEARCH_MOVIE } from "./actionType";

export const getAllMovie =(pageNo , lang)=>dispatch =>{
    axiosInstance.get(`/3/movie/popular?api_key=${MOVIE_KEY}&page=${pageNo}&language=${lang}`)
      .then((res) => dispatch(getAllMovieSucces(res.data.results)))
      .catch((err) => console.log(err));
}
 const getAllMovieSucces =(payload)=>({
    type : GET_ALL_MOVIE , payload
})


export const getSearchMovie =(query , pageNo ,lang )=>dispatch =>{
    axiosInstance
    .get(
      `/3/search/movie?api_key=${MOVIE_KEY}&query=${query}&page=${pageNo}&language=${lang}`
    )
    .then(res => dispatch(getSearchMovieSucces(res.data.results)))
    .catch((err) => console.log(err));
}
 const getSearchMovieSucces =(payload)=>({
    type : SEARCH_MOVIE , payload
})

export const getMovieDetails =(id,lang)=>dispatch=>{
  axiosInstance
  .get(
    `/3/movie/${id}?api_key=${MOVIE_KEY}&language=${lang}`
  )
  .then((res) => dispatch(getMovieDetailSucces(res.data)))
  .catch((err) => console.log(err));
}

const getMovieDetailSucces =(payload)=>({
  type : MOVIE_DETAIL , payload
})