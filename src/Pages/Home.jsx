import React, { useEffect, useCallback } from 'react'
import {Grid, Container} from '@material-ui/core'
import { PokemonCard } from '../Components/pokemonCard'
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from '../Redux/pokemons/actions';
import { LoadingData } from '../Components/loadingData';

const Home = () => {
  const pokemons = useSelector(state => state.pokemons.pokemons)
  const loading = useSelector(state => state.pokemons.loading)
  const page = useSelector(state => state.pokemons.page)
  const hasMore = useSelector(state => state.pokemons.hasMore)
  const dispatch = useDispatch()
  
  const getPkms = useCallback( ()=>
    dispatch(getPokemons(page))
    ,[dispatch, page] 
  )

  useEffect( () => {
    getPkms()
  },[])

  const next = useCallback(()=> {
    if (window.innerHeight - 12 + document.documentElement.scrollTop !== document.documentElement.offsetHeight ) return;
    if(hasMore && !loading){
      dispatch(getPokemons(page))
    }    
  }, [dispatch, page, hasMore, loading])

  useEffect( () => {
    window.addEventListener('scroll', next)
    return () => window.removeEventListener('scroll', next)
  }, [next])

  return (
    <Container >
      <Grid container direction="row" justify="flex-start" alignItems="center" spacing={3} style={{paddingTop: '32px'}}>
        {pokemons.map( pokemon => {
          return(
            <PokemonCard pokemon={pokemon} key={pokemon.id}/>
          )
        })}
        {loading && <LoadingData/>}
      </Grid>
    </Container>
  )
}

export default Home
