import React, { useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom';
import { requestPokemon } from '../Redux/pokemons/actions';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingData } from '../Components/loadingData';
import { setColor } from '../Utils/functions';
import '../Assets/styles/details.scss'
import { Box } from '@material-ui/core';

const PokemonDetails = () => {
  let {id} = useParams()
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemons.pokemon)
  const loading = useSelector(state => state.pokemons.loading)

  const request = useCallback( () => 
    dispatch(requestPokemon(id)), 
    [dispatch, id]
  )

  useEffect( () => {
    request()
  }, [id, request])

  return (
    <div className='pokemonDetails'>
      {loading ? 
        <LoadingData/>:
        <Box bgcolor={setColor(pokemon.type)} component='div' className='imageContainer'>
          <div></div>
        </Box>
      }
    </div>
  )
}


export default PokemonDetails
