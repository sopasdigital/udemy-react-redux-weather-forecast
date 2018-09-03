import { FETCH_WEATHER } from '../Actions/index';

export default function(state = [], action) {
  
  switch(action.type) {
    case FETCH_WEATHER:
      // return state.concat([ action.payload.data ]);

      //  Creates an entirely new array, adds payload
      //  data and returns said array
      return [ action.payload.data, ...state ]; 
  }
  
  return state;
}
