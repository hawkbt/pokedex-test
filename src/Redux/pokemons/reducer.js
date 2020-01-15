import { GET_POKEMONS, REQUEST_POKEMON, SUCCESS_REQUEST_POKEMON, ERROR_REQUEST_POKEMON, RECEIVE_POKEMONS, ERROR_GET_POKEMONS, SET_FAVORITES, REMOVE_FAVORITE } from "./actions"
import handler from '../../Utils/cookieHandler'
import { checkFavorite } from "../../Utils/functions"

export const initialState ={
  pokemons: [],
  pokemon: {},
  hasMore: true,
  loading: false,
  page: 0
}


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_POKEMONS:
    case REQUEST_POKEMON:
      return {...state, loading: true, page: action.page || 1}
    case RECEIVE_POKEMONS:
      // console.log(action.page)
      let hasMore = action.hasMore !== null ? true : false
      let pokemons = [...new Set([...state.pokemons,...action.data])]
      return {...state, pokemons, loading: false, page: action.page, hasMore}
    case SUCCESS_REQUEST_POKEMON:
      let pokemon = action.data
      pokemon.favorite = checkFavorite(action.data.id)
      return {...state, pokemon, loading: false}
    case ERROR_REQUEST_POKEMON:
    case ERROR_GET_POKEMONS:
      return {...state, loading: false}
    case SET_FAVORITES:
      let favorites = handler.getCookie('favorites') || []
      favorites.push(action.id)
      handler.setCookie('favorites', favorites)
      return {...state, pokemon: {...state.pokemon, favorite: true}}
    case REMOVE_FAVORITE:
      let cookies = handler.getCookie('favorites')
      cookies.splice(cookies[action.id],1)
      handler.setCookie('favorites',cookies)
      return {...state, pokemon: {...state.pokemon, favorite: false}}
    default:
      return {...state}
  }
}

export default reducer