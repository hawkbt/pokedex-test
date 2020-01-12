import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import loadable from '@loadable/component'
import { Loading } from './Components/loading';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";


const FavoritesLoading = loadable( () => import('./Pages/Favorites'), { fallback: <Loading/>})
const HomeLoading = loadable( () => import('./Pages/Home'), { fallback: <Loading/>})
const PokemonDetailLoading = loadable( () => import('./Pages/PokemonDetails'), { fallback: <Loading/>})

const App = () =>{
  let location = useLocation()
  return (
    <TransitionGroup>
      <CSSTransition 
        key={location.key}
        classNames='fade'
        timeout={300}
      >
        <Switch location={location}>
          <Route path='/favorites'>
            <FavoritesLoading/>
          </Route>
          <Route path='/pokemon/:id'>
            <PokemonDetailLoading/>
          </Route>
          <Route path='/'>
            <HomeLoading/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
