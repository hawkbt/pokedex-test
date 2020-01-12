import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import logger from 'redux-logger'

import pokemonsReducer, {
    initialState as pokemonsInitialState
} from './pokemons/reducer'
 

const initState = {
    pokemons: pokemonsInitialState
}

const reducers = combineReducers({
    pokemons: pokemonsReducer
})

const composeEnhancers = compose
const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];
const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
);

export const store = createStore(reducers, initState, enhancer);

sagaMiddleware.run(rootSaga);