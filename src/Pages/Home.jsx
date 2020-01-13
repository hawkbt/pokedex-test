import React from 'react'
import {Grid, Container} from '@material-ui/core'
import { PokemonCard } from '../Components/pokemonCard'

const Home = () => {
  return (
    <Container >
      <Grid  container direction="row" justify="flex-start" alignItems="center" spacing={3}>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
      </Grid>
    </Container>
  )
}

export default Home
