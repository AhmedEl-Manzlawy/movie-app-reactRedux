
import { ADD_FAV, REMOVE_FAV } from './actionType';

export const addMovieToFavourite =(payload)=>({
    type : ADD_FAV , payload
})

export const removeMovieFromFavourite =(payload)=>({
    type : REMOVE_FAV ,
    payload
})