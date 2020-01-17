import { GET_POKEMONS, REQUEST_POKEMON, SUCCESS_REQUEST_POKEMON, ERROR_REQUEST_POKEMON, RECEIVE_POKEMONS, ERROR_GET_POKEMONS, SET_FAVORITES, REMOVE_FAVORITE, GET_FAVORITES, RESET_PAGE } from "./actions"
import {toast} from 'react-toastify'
import handler from '../../Utils/cookieHandler'
import { checkFavorite } from "../../Utils/functions"

export const initialState ={
  pokemons: [],
  pokemon: {},
  favorites: [],
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
      favorites.push({id: action.data.id, name: action.data.name, types: action.data.types, type: action.data.type})
      handler.setCookie('favorites', favorites)
      toast.success(`${action.data.name} added to Favorites!`)
      return {...state, pokemon: {...state.pokemon, favorite: true}}
    case REMOVE_FAVORITE:
      let cookies = handler.getCookie('favorites')
      let pos  = cookies.indexOf( v => v.id === action.id)
      toast.success(`removed from favorites!`)
      cookies.splice(cookies[pos],1)
      handler.setCookie('favorites',cookies)
      return {...state, pokemon: {...state.pokemon, favorite: false}}
    case GET_FAVORITES:
      let fav = handler.getCookie('favorites') || []
      return{...state, favorites: fav}
    case RESET_PAGE:
      return{...state, page: 0, pokemons: []}
    default:
      return {...state}
  }
}

export default reducer