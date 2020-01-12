import { all } from "redux-saga/effects";
import { watchPokemons } from "./pokemons/saga";

export default function* rootSaga() {
    yield all([
        watchPokemons()
    ])
}