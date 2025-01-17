import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
} from "./actions";

const initial = {
  favs: [],
  current: null,
  error: null,
  loading: true,
};

export function writeFavsToLocalStorage(state) {
  
  localStorage.setItem("s10g4", JSON.stringify(state.favs));

}

export function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("s10g4"));

}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      if(state.favs.includes(action.payload)) 
      return state
      else{
        return {...state , favs : [...state.favs , action.payload ] }
      }
      

    case FAV_REMOVE:
      return {...state , favs :  state.favs.filter(item => item !== action.payload)}

    case FETCH_SUCCESS:
      return {...state , loading: false , error:'' , current:action.payload}

    case FETCH_LOADING:
      return {...state , loading:true , error:'' , current: null}

    case FETCH_ERROR:
      return {...state , loading : false , error:action.payload , current: null}

    case GET_FAVS_FROM_LS:
      // return {...state , favs: readFavsFromLocalStorage().length > 0 ? readFavsFromLocalStorage() : [] }
      return state.favs.length > 0 ? {...state , favs: readFavsFromLocalStorage()} : state  
    default:
      return state;
  }
}
