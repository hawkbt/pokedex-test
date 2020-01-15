import handler from './cookieHandler'

export const setId = value => {
  return `#${value.toString().padStart(3, '0')}`
}

export const checkFavorite = (id) => {
  let favorites = handler.getCookie('favorites') || []
  return favorites.indexOf(id.toString()) !== -1 ? true: false
}

export const setColor = (value) =>{
  switch (value) {
    case 'water':
      return '#84C2FF'
    case 'fire':
      return '#FF8F7B'
    case 'fliying':
      return '#ADE2EE'
    case 'grass':
      return '#6BA497'
    case 'normal':
      return '#DAD7C9'
    case 'bug':
      return '#CCD77B'
    case 'steel':
      return '#9FACA9'
    case 'dragon':
      return '#C882F3'
    case 'electric':
      return '#EEC944'
    case 'ghost':
      return '#7465CF'
    case 'fairy':
      return '#EFAEFF'
    case 'ice':
      return '#AACEF1'
    case 'fighting':
      return '#A99A89'
    case 'psychic':
      return '#F44987'
    case 'rock':
      return '#898F71'
    case 'sinister':
      return '#4F4A46'
    case 'ground':
      return '#C69C05'
    case 'poison':
      return '#7B30A9'
    default:  
  }
}