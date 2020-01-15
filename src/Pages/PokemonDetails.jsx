import React, { useEffect, useCallback } from 'react'
import { bindActionCreators } from 'redux'
import { connect, useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { requestPokemon } from '../Redux/pokemons/actions';

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
    <div>
      {pokemon.name}
    </div>
  )
}

const mapStateToProps = state => ({
  pokemon: state.pokemons.pokemon,
  loading: state.pokemons.loading,
})
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestPokemon }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails)
