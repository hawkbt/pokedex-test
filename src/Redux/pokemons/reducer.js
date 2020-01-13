import { GET_POKEMONS, REQUEST_POKEMON, SUCCESS_REQUEST_POKEMON, ERROR_REQUEST_POKEMON, RECEIVE_POKEMONS, ERROR_GET_POKEMONS, GET_FAVORITES } from "./actions"
import cookie from '../../Utils/cookieHandler'

export const initialState ={
  pokemons: [],
  pokemon: {},
  loading: false,
  favorites:  cookie.getCookie('favorites') || [],
  page: 1
}


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_POKEMONS:
    case REQUEST_POKEMON:
      return {...state, loading: true, page: action.page || 1}
    case RECEIVE_POKEMONS:
      return {...state, pokemons: action.data, loading: false}
    case SUCCESS_REQUEST_POKEMON:
      return {...state, pokemon: action.data, loading: false}
    case ERROR_REQUEST_POKEMON:
    case ERROR_GET_POKEMONS:
      return {...state, loading: false}
    case GET_FAVORITES:
      let favorites = cookie.getCookie('favorites')
      return {...state, favorites}
    default:
      return {...state}
  }
}

export default reducer