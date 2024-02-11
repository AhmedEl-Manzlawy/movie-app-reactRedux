
import { ADD_FAV, REMOVE_FAV } from './../actions/actionType';
const INITIAL_STATE =[]

export default function favouriteReducer(state =INITIAL_STATE , action){

    // console.log(action.payload);
    switch (action.type) {
        case ADD_FAV:
            return [...state , action.payload]

        case REMOVE_FAV :
            return state.filter(movie => movie.id !== action.payload)    
    
        default:
            return state;
    }
    

}
