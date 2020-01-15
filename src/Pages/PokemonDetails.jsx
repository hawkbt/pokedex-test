import React, { useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom';
import { requestPokemon, setFavorites, removeFavorite } from '../Redux/pokemons/actions';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingData } from '../Components/loadingData';
import { setColor, setId } from '../Utils/functions';
import '../Assets/styles/details.scss'
import { Box, Typography} from '@material-ui/core';
import { PokemonType } from '../Components/pokemonType/pokemonType';
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { TabsInfo } from '../Components/tabs';

const PokemonDetails = () => {
  let {id} = useParams()
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemons.pokemon)
  const loading = useSelector(state => state.pokemons.loading)

  const request = useCallback( () => 
    dispatch(requestPokemon(id)), [dispatch, id]
  )

  const setFavorite = useCallback(() => dispatch(setFavorites(pokemon)), [pokemon, dispatch])

  const rmFavorite = useCallback( () => dispatch(removeFavorite(id)), [id, dispatch])

  useEffect( () => {
    request()
  }, [id,request])

  return (
    <div className='pokemonDetails'>
      {loading ? 
        <LoadingData/>:
        <>
          <Box bgcolor={setColor(pokemon.type)} component='div' className='imageContainer'>
            <Box className="information" component='div'>
              <Typography component='h4' variant='h4'>{pokemon.name}</Typography>
              <PokemonType types={pokemon.types}/>
            </Box>
            <Box className="pokemon" component='div'>
              <img src={pokemon.id ? `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png` : ''} alt={pokemon.name}/>
            </Box>
            <Box className="icon-id" component='div'>
              <div className="id">
                <Typography component='h6' variant='h6'>
                  {setId(pokemon.id || '')}
                </Typography>
              </div>
              <div className="icon">
                {!pokemon.favorite && <FavoriteBorderIcon fontSize='large' onClick={setFavorite}/>}
                {pokemon.favorite &&  <FavoriteIcon fontSize='large' onClick={rmFavorite}/>}
              </div>
            </Box>
          </Box>
          <div className="info">
            <TabsInfo data={pokemon}/>
          </div>
        </>
      }
    </div>
  )
}


export default PokemonDetails
