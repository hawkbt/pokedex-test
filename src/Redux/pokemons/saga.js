import { takeEvery, call, put } from 'redux-saga/effects'
import {get} from 'axios'
import { receivePokemons, successRequestPokemon, REQUEST_POKEMON, errorRequestPokemon, GET_POKEMONS, errorGetPokemons } from './actions'

let url = process.env.REACT_APP_API_URL

function* getPokemons ({page}) {
  try {
    let pages = page !== 0 ? `&offset=${page * 5}`: ''
    let data = []
    const response = yield call(get, url + '?limit=5' + pages)
    for (let index = 0; index < response.data.results.length; index++) {
      let pokemonData = yield call(get, response.data.results[index].url)
      data.push(pokemonData.data)
      data.map( pokemon => {
        pokemon.types.map( t => {
          if (t.slot === 1){
            pokemon.type = t.type.name
          } 
          return true
        })
        return true
      })
    }
    yield put(receivePokemons(data, parseInt(page+1) , response.data.next))
  } catch (err) {
    yield put(errorGetPokemons())
  }
}

function* requestPokemon({id}){
  try {
    const response = yield call(get, url + '/' + id)
    response.data.types.map( t => {
      if (t.slot === 1){
        response.data.type = t.type.name
      } 
      return true
    })
    yield put(successRequestPokemon(response.data))
  } catch (err) {
    yield put(errorRequestPokemon())
  }
}

export function* watchPokemons() {
  yield takeEvery(GET_POKEMONS, getPokemons)
  yield takeEvery(REQUEST_POKEMON, requestPokemon)
}