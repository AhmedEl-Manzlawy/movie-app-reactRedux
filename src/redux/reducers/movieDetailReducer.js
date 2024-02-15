import { MOVIE_DETAIL } from "../actions/actionType";

export default function movieDetailReducer(state ={} , action){
    switch (action.type) {
        case MOVIE_DETAIL:
             return action.payload   
            
    
        default:
            return state
            
    }
}