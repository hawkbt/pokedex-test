export const initialState ={
  pokemons: [],
  pokemon: {},
  page: 1
}


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return {...state}
  }
}

export default reducer