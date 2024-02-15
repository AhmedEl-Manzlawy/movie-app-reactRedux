import { combineReducers } from "redux";
import favouriteReducer from "./favouriteReducer";
import movieReducer from "./movieReducer";
import movieDetailReducer from "./movieDetailReducer";

export default combineReducers ({
    favourite : favouriteReducer,
    movie : movieReducer,
    movieDetail : movieDetailReducer
})