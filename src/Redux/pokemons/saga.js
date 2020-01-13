import { takeEvery, call, put } from 'redux-saga/effects'
import {get} from 'axios'
import { receivePokemons, successRequestPokemon, REQUEST_POKEMON, errorRequestPokemon, GET_POKEMONS, errorGetPokemons } from './actions'

let url = process.env.REACT_APP_API_URL

function* getPokemons () {
  try {
    const response = yield call(get, url)
    yield put(receivePokemons())
  } catch (err) {
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