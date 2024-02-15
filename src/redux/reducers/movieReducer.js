import { GET_ALL_MOVIE, SEARCH_MOVIE } from "../actions/actionType";

const INITIAL_STATE = [];
export default function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_MOVIE:
      return action.payload;
    case SEARCH_MOVIE:
      return action.payload; 
    default:
      return state;
  }
}
