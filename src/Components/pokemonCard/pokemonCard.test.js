import { configure, shallow } from 'enzyme';
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { PokemonType } from '../pokemonType/pokemonType';
import PokemonCard from './pokemonCard';

let pokemon = {
  id: 1,
  name: "bulbasaur",
  order: 1,
  species: {
  name: "bulbasaur",
  url: "https://pokeapi.co/api/v2/pokemon-species/1/"
  },
  types: [{
    slot: 2,
    type: {
      name: "poison",
      url: "https://pokeapi.co/api/v2/type/4/"
    }
  },{
    slot: 1,
    type: {
      name: "grass",
      url: "https://pokeapi.co/api/v2/type/12/"
    }
  }],
  type: "grass",
  weight: 69
}

// Connecting Enzyme
configure({adapter: new Adapter()});

describe('<PokemonCard/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PokemonCard pokemon={pokemon} />);
  });

  it('should render at least one <PokemonType/> if array is not void', () =>  {
    expect(wrapper.find(PokemonType)).toHaveLength(1);
  });
});