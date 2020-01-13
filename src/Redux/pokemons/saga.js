import { takeEvery, call, put } from 'redux-saga/effects'
import {get} from 'axios'
import { receivePokemons, successRequestPokemon, REQUEST_POKEMON, errorRequestPokemon, GET_POKEMONS, errorGetPokemons } from './actions'

let url = process.env.REACT_APP_API_URL

function* getPokemons () {
  try {
    let data = []
    const response = yield call(get, url + '?limit=5')
    for (let index = 0; index < response.data.results.length; index++) {
      let pokemonData = yield call(get, response.data.results[index].url)
      data.push(pokemonData.data)
      data.map( pokemon => {
        pokemon.types.map( t => {
          if (t.slot === 1){
            pokemon.type = t.type.name
          } 
        })
      })
    }
    yield put(receivePokemons(data))
  } catch (err) {
    console.log(err)
    yield put(errorGetPokemons())
  }
}

function* requestPokemon({id}){
  try {
    const response = yield call(get, url + '/' + id)
    yield put(successRequestPokemon(response.data))
  } catch (err) {
    yield put(errorRequestPokemon())
  }
}

export function* watchPokemons() {
  yield takeEvery(GET_POKEMONS, getPokemons)
  yield takeEvery(REQUEST_POKEMON, requestPokemon)
}