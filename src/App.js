import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import loadable from '@loadable/component'
import { Loading } from './Components/loading';

import { Navbar } from './Components/navbar';


const FavoritesLoading = loadable( () => import('./Pages/Favorites'), { fallback: <Loading/>})
const HomeLoading = loadable( () => import('./Pages/Home'), { fallback: <Loading/>})
const PokemonDetailLoading = loadable( () => import('./Pages/PokemonDetails'), { fallback: <Loading/>})

const App = () =>{
  let location = useLocation()
  return (
    <Navbar>
      <Switch location={location}>
        <Route exact path='/'>
          <HomeLoading/>
        </Route>
        <Route path='/favorites'>
          <FavoritesLoading/>
        </Route>
        <Route path='/pokemon/:id'>
          <PokemonDetailLoading/>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Navbar>
  );
}

export default App;
