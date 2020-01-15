import React, { useEffect, useCallback } from 'react'
import { Container, Grid } from '@material-ui/core'
import { PokemonCard } from '../Components/pokemonCard'
import { LoadingData } from '../Components/loadingData'
import { useSelector, useDispatch } from 'react-redux'
import { getFavorites } from '../Redux/pokemons/actions'

const Favorites = () => {
  const favorites = useSelector(state => state.pokemons.favorites)
  const dispatch = useDispatch()
  const loading = useSelector(state => state.pokemons.loading)

  const getFav = useCallback( ()=> dispatch(getFavorites()),[getFavorites] )

  useEffect( () => {
    getFav()
  }, [])

  return (
    <Container >
      <Grid container direction="row" justify="flex-start" alignItems="center" spacing={3} style={{paddingTop: '32px'}}>
        {favorites.map( pokemon => {
          return(
            <PokemonCard pokemon={pokemon} key={pokemon.id}/>
          )
        })}
        {loading && <LoadingData/>}
      </Grid>
    </Container>
  )
}

export default Favorites
