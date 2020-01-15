export const GET_POKEMONS = 'GET_POKEMONS'
export const RECEIVE_POKEMONS = 'RECEIVE_POKEMONS'
export const ERROR_GET_POKEMONS = 'ERROR_GET_POKEMONS'

export const REQUEST_POKEMON =  'REQUEST_POKEMON'
export const SUCCESS_REQUEST_POKEMON = 'SUCCESS_REQUEST_POKEMON'
export const ERROR_REQUEST_POKEMON = 'ERROR_REQUEST_POKEMON'

export const SET_FAVORITES = 'SET_FAVORITES'
export const GET_FAVORITES = 'GET_FAVORITES'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

export const RESET_PAGE = 'RESET_PAGE'

export const getPokemons = page => ({type: GET_POKEMONS, page})
export const receivePokemons = (data, page, hasMore) => ({type: RECEIVE_POKEMONS, data, page, hasMore})
export const errorGetPokemons = () => ({type: ERROR_GET_POKEMONS})

export const requestPokemon = id => ({type: REQUEST_POKEMON, id})
export const successRequestPokemon = data => ({type: SUCCESS_REQUEST_POKEMON, data})
export const errorRequestPokemon = () => ({type: ERROR_REQUEST_POKEMON})

export const setFavorites = data => ({type: SET_FAVORITES, data})
export const getFavorites = () => ({type: GET_FAVORITES})
export const removeFavorite = id => ({type: REMOVE_FAVORITE, id})

export const resetPage = () => ({type: RESET_PAGE})