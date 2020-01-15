import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles( theme => ({
  type: {
    display: 'block',
    fontSize: '12px',
    lineHeight: '19px',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    background: 'rgba(0, 0, 0, 0.2)',
    marginBottom: '5px',
    padding: '2px',
    height: '22px',
    borderRadius: '50px',
    textTransform: 'capitalize',
    width: '80%',
  },
}))

export const PokemonType = ({types}) => {
  const classes = useStyles()
  return (
    <Box component='div' style={{marginTop: '20px'}}>
      {(types || []).map( type => {
        return(
          <Box component='span' className={classes.type} key={`${type.slot}Type`}>{type.type.name}</Box>
        )
      })}
    </Box>
  )
}
