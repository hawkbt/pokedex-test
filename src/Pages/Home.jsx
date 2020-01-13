import React, { useEffect } from 'react'
import {Grid, Container} from '@material-ui/core'
import { PokemonCard } from '../Components/pokemonCard'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { getPokemons } from '../Redux/pokemons/actions';

const Home = ({pokemons, page, getPokemons}) => {
  useEffect( () => {
    getPokemons()
  },[])

  return (
    <Container >
      <Grid  container direction="row" justify="flex-start" alignItems="center" spacing={3}>
        {pokemons.map( pokemon => {
          return(
            <PokemonCard pokemon={pokemon} key={pokemon.id}/>
          )
        })}
      </Grid>
    </Container>
  )
}

const mapStateToProps = state => ({
  pokemons: state.pokemons.pokemons,
  loading: state.pokemons.loading,
  page: state.pokemons.page
})
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPokemons }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
