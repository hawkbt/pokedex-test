import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Switch, Route, useLocation } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import loadable from '@loadable/component'
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from './Components/loading';

import { Navbar } from './Components/navbar';


const FavoritesLoading = loadable( () => import('./Pages/Favorites'), { fallback: <Loading/>})
const HomeLoading = loadable( () => import('./Pages/Home'), { fallback: <Loading/>})
const PokemonDetailLoading = loadable( () => import('./Pages/PokemonDetails'), { fallback: <Loading/>})

const App = () =>{
  let location = useLocation()
  return (
    <Navbar>
      <ToastContainer position="top-center" autoClose={5000} closeOnClick pauseOnVisibilityChange draggablepauseOnHover />
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
