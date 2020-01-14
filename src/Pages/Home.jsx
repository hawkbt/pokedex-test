import React, { useEffect } from 'react'
import {Grid, Container} from '@material-ui/core'
import { PokemonCard } from '../Components/pokemonCard'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { getPokemons } from '../Redux/pokemons/actions';
import { LoadingData } from '../Components/loadingData';

const Home = ({pokemons, page, getPokemons, loading, hasMore}) => {
  useEffect( () => {
    getPokemons(0)
  },[getPokemons])

  const next = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ) return;
    if(hasMore){
      getPokemons(page)
    }
  }

  useEffect( () => {
    window.addEventListener('scroll', next)
    return () => window.removeEventListener('scroll', next)
  }, [next])

  return (
    <Container>
      <Grid container direction="row" justify="flex-start" alignItems="center" spacing={3}>
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

const mapStateToProps = state => ({
  pokemons: state.pokemons.pokemons,
  loading: state.pokemons.loading,
  page: state.pokemons.page,
  hasMore: state.pokemons.hasMore
})
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPokemons }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
